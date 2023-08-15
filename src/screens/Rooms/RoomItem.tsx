import { getDateDifference } from 'utils'

import { RoomItemProps } from './types'

import Container from 'components/Container/Container'
import ProfileIcon from '@assets/icons/profile.svg'

import styles, { Pressable, Message, Name, Image, Info, Status, StatusText, ActiveStatusIndicator } from './styles'
import lib from 'styles/library'

const RoomItem = (props: RoomItemProps) => {
	const { item } = props

	const maxMessageLength = 40
	// Adds ... at the of the message if message has characters' length greather than `maxMessageLength`
	const message = `${item.message.substring(0, maxMessageLength)}${'.'.repeat(
		Math.max(Math.min(item.message.length - maxMessageLength, 3), 0)
	)}`

	const status = (() => {
		if (item.status === 'active') {
			return <ActiveStatusIndicator />
		} else {
			const dateText = getDateDifference(item.status)
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
			<Pressable onPress={() => props.onNavigate(item)}>
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
