import { StyleSheet } from 'react-native'
import { css } from 'styled-components'
import styles from 'styled-components/native'

import { Variant } from './types.modal'

import lib from 'styles/library'

export default StyleSheet.create({
	svgIconActive: {
		fill: lib.colors.primary[500],
		color: lib.colors.white
	},
	svgIconInactive: {
		fill: lib.colors.white,
		color: lib.colors.primary[500]
	}
})

export const Pressable = styles.Pressable<{ $active: boolean; $variant?: Variant }>`
	background-color: ${lib.colors.primary[500]};
	padding: 5px 10px;
	${(props) => {
		if (props.disabled) {
			return css`
				background-color: ${lib.colors.gray[300]};
			`
		}
		switch (props.$variant) {
			case 'circle': {
				return css`
					background-color: transparent;
					height: 44px;
					aspect-ratio: 1 / 1;
					border-radius: 50%;
					padding: 0;
					margin: 0;
					${props.$active
						? `
						background-color: red;
					`
						: ''}
				`
			}
			case 'transparent': {
				return css`
					background-color: transparent;
					padding: 0;
					margin: 0;
					${props.$active
						? `
						background-color: transparent;
					`
						: ''}
				`
			}
		}
		if (props.$active) {
			return css`
				background-color: ${lib.colors.primary[700]};
			`
		}
	}}
`

export const Text = styles.Text`
	color: ${lib.colors.white};
	font-size: ${lib.typography.button.fontSize}px;
	font-weight: ${lib.typography.button.fontWeight};
	font-family: ${lib.typography.button.fontFamily};
	letter-spacing: ${lib.typography.button.letterSpacing}px;
`
