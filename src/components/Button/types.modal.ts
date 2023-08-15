import { GestureResponderEvent } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { Styles } from 'styled-components/native/dist/types'

export interface ButtonProps {
	text?: string
	disabled?: boolean
	onPress?: (event: GestureResponderEvent) => void
	children?: JSX.Element
	variant?: Variant
	style?: Styles<object>
	iconComponent?: React.FC<SvgProps>
	iconStyles?: SvgProps
	onActive?: (isActive: boolean) => void
}
export type Variant = 'default' | 'circle' | 'transparent'
