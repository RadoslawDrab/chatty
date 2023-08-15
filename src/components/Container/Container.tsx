import { BorderRadiusBox, ContainerProps } from './types.modal'

import lib from 'styles/library'
import { ContainerBox } from './styles'

const Container = (props: ContainerProps) => {
	const borderRadiusBox = (() => {
		const { borderRadius, variant } = props

		// Sets default border radius to 0
		let styles: BorderRadiusBox = {
			topLeft: 0,
			topRight: 0,
			bottomLeft: 0,
			bottomRight: 0
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
			if (borderRadius.topLeft || borderRadius.all || borderRadius.top) styles.topLeft = borderRadiusSize
			if (borderRadius.topRight || borderRadius.all || borderRadius.top) styles.topRight = borderRadiusSize
			if (borderRadius.bottomLeft || borderRadius.all || borderRadius.bottom) styles.bottomLeft = borderRadiusSize
			if (borderRadius.bottomRight || borderRadius.all || borderRadius.bottom) styles.bottomRight = borderRadiusSize
		}
		return styles
	})()

	return (
		<ContainerBox $borderRadiusBox={borderRadiusBox} {...props.styles}>
			{props.children}
		</ContainerBox>
	)
}
export default Container
