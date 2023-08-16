import { StyleSheet } from 'react-native'
import { css } from 'styled-components'
import styles from 'styled-components/native'

import { getCssText } from 'utils/styles'

import { BorderRadiusBox } from 'components/Container/types.modal'
import { States } from './types.modal'

import lib from 'styles/library'

export default StyleSheet.create({
	button: {
		position: 'absolute',
		right: '10%',
		top: '50%',
		transform: [{ translateY: -9 }],
		height: 18,
		width: 18,
		color: lib.colors.gray[300]
	}
})

export const TextInput = styles.TextInput<{ $states: Partial<States> | undefined; $borderRadius: Partial<BorderRadiusBox> }>`
	${getCssText('title', lib.colors.black)}
  background-color: ${lib.colors.white};
  padding: ${lib.sizing.small}px ${lib.sizing.medium}px;
  border: 2px solid transparent;

  ${(props) => {
		const borderRadius = props.$borderRadius
		const defaultSize = lib.sizing.small
		return css`
			border-top-left-radius: ${borderRadius.topLeft ?? defaultSize}px;
			border-top-right-radius: ${borderRadius.topRight ?? defaultSize}px;
			border-bottom-left-radius: ${borderRadius.bottomLeft ?? defaultSize}px;
			border-bottom-right-radius: ${borderRadius.bottomRight ?? defaultSize}px;
		`
	}}
  ${(props) => {
		if (props.$states?.disabled) {
			return css`
				background-color: ${lib.colors.gray[100]};
			`
		}
		if (props.$states?.error) {
			return css`
				border: 2px solid ${lib.colors.error};
			`
		}
		if (props.$states?.focus) {
			return css`
				border: 2px solid ${lib.colors.primary[500]};
			`
		}
	}}
`
export const InputWrapper = styles.View`
  position: relative;
`
