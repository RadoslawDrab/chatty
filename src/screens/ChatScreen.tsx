import { useState, useEffect, useCallback } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'

const ChatScreen = (props: any) => {
	const [messages, setMessages] = useState<IMessage[]>([])

	useEffect(() => {
		setMessages([
			{
				_id: 1,
				text: ':D',
				createdAt: new Date(),
				user: {
					_id: 2,
					name: 'React Native',
					avatar: 'https://picsum.photos/200/300'
				}
			}
		])
	}, [])

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
