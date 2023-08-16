import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'

import { useRoom } from 'hooks/useRoom'
import { renderBubble, renderInputToolbar, renderSend } from './Chat/renders'

import { AppStackParamList } from '../types.modal'

import { PageBackground } from 'styles/generic'

import lib from 'styles/library'

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
		<PageBackground>
			<SafeAreaView style={{ flex: 1 }}>
				<GiftedChat
					messages={messages}
					onSend={(messages: []) => onSend(messages)}
					user={{
						_id: 1
					}}
					alwaysShowSend
					renderTime={() => <></>}
					renderSend={renderSend}
					renderBubble={renderBubble}
					forceGetKeyboardHeight
					renderInputToolbar={renderInputToolbar}
					messagesContainerStyle={{
						paddingBottom: lib.sizing.medium * 4,
						marginBottom: -32
					}}
				/>
			</SafeAreaView>
		</PageBackground>
	)
}
export default ChatScreen
