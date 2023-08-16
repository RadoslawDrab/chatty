import styles from 'styled-components/native'

import lib from 'styles/library'

export const ContainerWrapper = styles.View`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: ${lib.colors.secondary[300]};
	padding: ${lib.sizing.medium}px;
	border-bottom-left-radius: ${lib.sizing.big}px;
	border-bottom-right-radius: ${lib.sizing.big}px;
`
export const Wrapper = styles.View<{ $gap?: number }>`
	max-width: 100%;
	flex-shrink: 1;
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
