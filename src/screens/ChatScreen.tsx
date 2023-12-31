import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text } from 'react-native'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'

import useApp from 'hooks/useApp'
import useMessage from 'hooks/useMessage'
import { useRoom } from 'hooks/useRoom'
import { renderBubble, renderInputToolbar, renderSend } from './Chat/renders'

import { AppStackParamList } from '../types.modal'

import Error from 'components/Error/Error'
import { PageBackground } from 'styles/generic'

import lib from 'styles/library'

const ChatScreen = (props: NativeStackScreenProps<AppStackParamList, 'Chat'>) => {
	const [state] = useApp()
	const { mutation: sendMessage } = useMessage()
	const { loading, error, room } = useRoom(props.route.params.roomId)

	const [messages, setMessages] = useState<IMessage[]>([])

	useEffect(() => {
		if (room)
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
		messages.forEach(async (message) => {
			await sendMessage({ variables: { body: message.text, roomId: props.route.params.roomId } })
		})
		setMessages((previousMessages: IMessage[]) => GiftedChat.append(previousMessages, messages))
	}, [])

	if (error) {
		return <Error error={error.message} />
	}

	return (
		<PageBackground>
			<SafeAreaView style={{ flex: 1 }}>
				{!loading ? (
					<GiftedChat
						messages={messages}
						onSend={(messages: []) => onSend(messages)}
						user={{
							_id: state.user.id
						}}
						alwaysShowSend
						renderTime={() => <></>}
						renderSend={renderSend}
						renderBubble={renderBubble}
						renderInputToolbar={renderInputToolbar}
						messagesContainerStyle={{
							paddingBottom: lib.sizing.medium * 4,
							marginBottom: -32
						}}
					/>
				) : (
					<ActivityIndicator />
				)}
			</SafeAreaView>
		</PageBackground>
	)
}
export default ChatScreen
