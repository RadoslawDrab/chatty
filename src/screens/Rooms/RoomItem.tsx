import { ActivityIndicator, Text } from 'react-native'

import { clipText, getDateDifference } from 'utils'
import { useRoom } from 'hooks/useRoom'

import { RoomItemProps, Item } from './types.modal'

import Container from 'components/Container/Container'
import ProfileIcon from '@assets/icons/profile.svg'

import styles, { Pressable, Message, Name, Image, Info, Status, StatusText, ActiveStatusIndicator } from './styles'
import lib from 'styles/library'

const RoomItem = (props: RoomItemProps) => {
	const { loading, error, room } = useRoom(props.id)

	if (error) {
		return <Text>{error.message}</Text>
	}

	const item: Item = {
		id: room?.id ?? '',
		name: room?.name ?? '',
		message: room?.messages[0].body ?? '',
		image: '',
		// There's no status checking so status is dependent on last sent message
		status: room?.messages[0].insertedAt ?? 'active',
		read: false
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
