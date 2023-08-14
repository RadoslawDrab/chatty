import { View, ViewStyle } from 'react-native'

import { ContainerProps } from './types.modal'

import lib from 'styles/library'

const Container = (props: ContainerProps) => {
	const styles = (() => {
		const { borderRadius, variant } = props

		// Sets default padding and styles from parent
		let styles: ViewStyle = {
			padding: lib.sizing.small,
			...props.styles
		}
		// Gets border radius size based on container variant. Default is `small`
		const borderRadiusSize = (() => {
			switch (variant) {
				case 'big':
					return lib.sizing.big
				default:
					return lib.sizing.small
			}
		})()

		// Sets border radius of each corner based on `borderRadius` props
		if (borderRadius) {
			if (borderRadius.topLeft || borderRadius.all || borderRadius.top) styles.borderTopLeftRadius = borderRadiusSize
			if (borderRadius.topRight || borderRadius.all || borderRadius.top) styles.borderTopRightRadius = borderRadiusSize
			if (borderRadius.bottomLeft || borderRadius.all || borderRadius.bottom) styles.borderBottomLeftRadius = borderRadiusSize
			if (borderRadius.bottomRight || borderRadius.all || borderRadius.bottom) styles.borderBottomRightRadius = borderRadiusSize
		}
		return styles
	})()

	return <View style={styles}>{props.children}</View>
}
export default Container
