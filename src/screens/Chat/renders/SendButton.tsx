import { View } from 'react-native'
import { IMessage, Send, SendProps } from 'react-native-gifted-chat'

import usePress from 'hooks/usePress'

import SendIcon from '@assets/icons/send.svg'

import lib from 'styles/library'

export function renderSend(props: SendProps<IMessage>) {
	const press = usePress()
	const iconColor = press.isPressed ? lib.colors.primary[700] : lib.colors.primary[500]

	return (
		<Send {...props} containerStyle={{ backgroundColor: 'transparent' }} {...press}>
			<View style={{ flex: 0, width: '100%', height: '100%' }}>
				<SendIcon color={iconColor} />
			</View>
		</Send>
	)
}
