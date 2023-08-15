import { clipText, getDateDifference } from 'utils'

import { RoomItemProps } from './types'

import Container from 'components/Container/Container'
import ProfileIcon from '@assets/icons/profile.svg'

import styles, { Pressable, Message, Name, Image, Info, Status, StatusText, ActiveStatusIndicator } from './styles'
import lib from 'styles/library'

const RoomItem = (props: RoomItemProps) => {
	const { item } = props

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
				{item.image ? <Image source={{}} /> : <ProfileIcon />}
				<Info>
					<Name $read={item.read}>{item.name}</Name>
					<Message $read={item.read}>{message}</Message>
				</Info>
				<Status>{status}</Status>
			</Pressable>
		</Container>
	)
}
export default RoomItem
