import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'
import { SvgProps } from 'react-native-svg'

export interface ButtonProps {
	text?: string
	disabled?: boolean
	onPress?: (event: GestureResponderEvent) => void
	children?: JSX.Element
	variant?: Variant
	style?: StyleProp<ViewStyle>
	iconComponent?: React.FC<SvgProps>
	iconStyles?: SvgProps
	onActive?: (isActive: boolean) => void
}
export type Variant = 'default' | 'circle' | 'transparent'
