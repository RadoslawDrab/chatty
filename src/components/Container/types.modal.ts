import { ViewStyle } from 'react-native'

export interface ContainerProps {
	variant?: 'big' | 'small'
	borderRadius?: {
		topLeft?: boolean
		topRight?: boolean
		bottomLeft?: boolean
		bottomRight?: boolean
		all?: boolean
		bottom?: boolean
		top?: boolean
	}
	children?: JSX.Element | JSX.Element[]
	styles?: ViewStyle
}
