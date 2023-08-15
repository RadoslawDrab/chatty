import styles from 'styled-components/native'
import { css } from 'styled-components'

import { BorderRadiusBox } from './types.modal'

import lib from 'styles/library'

export const ContainerBox = styles.View<{ $borderRadiusBox: BorderRadiusBox }>`
  padding: ${lib.sizing.small}px;
  ${(props) => {
		const { topLeft, topRight, bottomLeft, bottomRight } = props.$borderRadiusBox
		return css`
			border-top-left-radius: ${topLeft}px;
			border-top-right-radius: ${topRight}px;
			border-bottom-left-radius: ${bottomLeft}px;
			border-bottom-right-radius: ${bottomRight}px;
		`
	}}
`
