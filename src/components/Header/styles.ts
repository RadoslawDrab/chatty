import { StyleSheet } from 'react-native'
import styles from 'styled-components/native'

import lib from 'styles/library'

export default StyleSheet.create({
	header: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: lib.colors.secondary[300],
		padding: lib.sizing.big
	}
})

export const Wrapper = styles.View<{ $gap?: number }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: ${(props) => props.$gap ?? 8}px;
`
export const Background = styles.View`
	position: absolute;
	top: -200px;
	left: -50%;
	width: 200%;
	height: 200px;
	background-color: ${lib.colors.secondary[300]};
`
