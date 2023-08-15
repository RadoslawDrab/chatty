import { useState, useEffect, useCallback } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'

import { useRoom } from 'hooks/useRoom'

import { AppStackParamList } from '../types.modal'

const ChatScreen = (props: NativeStackScreenProps<AppStackParamList, 'Chat'>) => {
	const { loading, error, data: room } = useRoom(props.route.params.roomId)

	const [messages, setMessages] = useState<IMessage[]>([])

	if (loading) {
		return <></>
	}
	if (error) {
		return <></>
	}

	useEffect(() => {
		setMessages(
			room.messages.map((message) => ({
				_id: message.id,
				text: message.body,
				createdAt: new Date(message.insertedAt),
				user: {
					_id: message.user.id,
					name: message.user.firstName
				}
			}))
		)
	}, [room])

	const onSend = useCallback((messages: IMessage[] = []) => {
		setMessages((previousMessages: IMessage[]) => GiftedChat.append(previousMessages, messages))
	}, [])

	return (
		<GiftedChat
			messages={messages}
			onSend={(messages: []) => onSend(messages)}
			user={{
				_id: 1
			}}
		/>
	)
}
export default ChatScreen
