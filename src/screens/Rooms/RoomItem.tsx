import { ActivityIndicator } from 'react-native'

import useApp from 'hooks/useApp'
import { useRoom } from 'hooks/useRoom'
import { clipText, getDateDifference } from 'utils'

import { Item, RoomItemProps } from './types.modal'

import ProfileIcon from '@assets/icons/profile.svg'
import Container from 'components/Container/Container'
import Error from 'components/Error/Error'

import lib from 'styles/library'
import styles, { ActiveStatusIndicator, Image, Info, Message, Name, Pressable, Status, StatusText } from './styles'

const RoomItem = (props: RoomItemProps) => {
	const [state] = useApp()
	const { loading, error, room } = useRoom(props.id)

	if (error) {
		return <Error error={error.message} />
	}

	const item: Item = {
		id: room?.id ?? '',
		name: room?.name ?? '',
		message: room?.messages[0].body ?? '',
		image: '',
		// There's no status checking so status is dependent on last sent message not by current user
		status: room?.messages.find((message) => message.user.id !== state.user.id)?.insertedAt ?? 'active',
		read: true
	}

	const maxMessageLength = 40
	const message = clipText(item.message, maxMessageLength)

	const status = (() => {
		if (item.status === 'active') {
			return <ActiveStatusIndicator />
		} else {
			const dateText = getDateDifference(new Date(item.status))
			return <StatusText>{dateText}</StatusText>
		}
	})()

	return (
		<Container
			variant="small"
			borderRadius={{ all: true }}
			styles={{
				...styles.container,
				...(!item.read ? { backgroundColor: lib.colors.primary[500] } : {})
			}}>
			<Pressable onPress={() => props.onNavigate({ roomId: props.id, name: item.name, status: item.status })}>
				{item.image ? <Image source={{}} /> : <ProfileIcon width={64} height={64} />}
				<Info>
					{loading ? (
						<ActivityIndicator />
					) : (
						<>
							<Name $read={item.read}>{item.name}</Name>
							<Message $read={item.read}>{message}</Message>
						</>
					)}
				</Info>
				<Status>{status}</Status>
			</Pressable>
		</Container>
	)
}
export default RoomItem
