import { StyleProp, TextInputProps, ViewStyle } from 'react-native'

import { BorderRadiusBox } from 'components/Container/types.modal'

export interface InputProps {
	attr?: Partial<TextInputProps>
	style?: StyleProp<ViewStyle>
	borderRadius?: Partial<BorderRadiusBox>
	states?: Partial<States>
	text?: string
	onTextChange?: (text: string) => void
	onClear?: () => void
}
export interface States {
	focus: boolean
	error: boolean
	disabled: boolean
}
