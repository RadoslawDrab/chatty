import { ViewStyle } from 'react-native'

export interface ContainerProps {
	variant?: 'big' | 'small'
	borderRadius?: BorderRadius
	children?: JSX.Element | JSX.Element[]
	styles?: ViewStyle
}
export type BorderRadiusBox = {
	topLeft: number
	topRight: number
	bottomLeft: number
	bottomRight: number
}
type BorderRadius = {
	topLeft?: boolean
	topRight?: boolean
	bottomLeft?: boolean
	bottomRight?: boolean
	all?: boolean
	bottom?: boolean
	top?: boolean
}
