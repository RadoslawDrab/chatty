import { GestureResponderEvent, ViewStyle } from 'react-native'

export interface ButtonProps {
	text?: string
	disabled?: boolean
	onPress?: (event: GestureResponderEvent) => void
	children?: JSX.Element
	variant?: 'default' | 'alternative'
	style?: ViewStyle
}
