const sizes = {
	small: 12,
	medium: 16,
	big: 24
}
export default sizes

export function padding(vertical: Size, horizontal: Size): Padding {
	const verticalSize = sizes[vertical]
	const horizontalSize = sizes[horizontal]
	return {
		paddingVertical: verticalSize,
		paddingHorizontal: horizontalSize
	}
}
export function margin(vertical: Size, horizontal: Size): Margin {
	const verticalSize = sizes[vertical]
	const horizontalSize = sizes[horizontal]
	return {
		marginVertical: verticalSize,
		marginHorizontal: horizontalSize
	}
}

export type Size = keyof typeof sizes

type Padding = {
	paddingVertical: number
	paddingHorizontal: number
}
type Margin = {
	marginVertical: number
	marginHorizontal: number
}
