import { StyleSheet } from 'react-native'
import styles from 'styled-components/native'

import lib from 'styles/library'

const bubbleGap = lib.sizing.small
const bubblePadding = lib.sizing.small / 2
const bubbleBorderRadius = lib.sizing.small

export default StyleSheet.create({
	toolbar: {
		backgroundColor: lib.colors.secondary[300],
		borderTopLeftRadius: lib.sizing.small,
		borderTopRightRadius: lib.sizing.small,
		padding: lib.sizing.medium
	},
	input: {
		marginRight: lib.sizing.small
	},
	bubbleLeft: {
		backgroundColor: lib.colors.white,
		borderTopLeftRadius: bubbleBorderRadius,
		borderTopRightRadius: bubbleBorderRadius,
		borderBottomRightRadius: bubbleBorderRadius,
		borderBottomLeftRadius: 0,
		padding: bubblePadding,
		marginBottom: bubbleGap
	},
	bubbleLeftText: {
		color: lib.colors.black,
		...lib.typography.body.text
	},
	bubbleRight: {
		backgroundColor: lib.colors.primary[300],
		borderTopLeftRadius: bubbleBorderRadius,
		borderTopRightRadius: bubbleBorderRadius,
		borderBottomLeftRadius: bubbleBorderRadius,
		borderBottomRightRadius: 0,
		padding: bubblePadding,
		marginBottom: bubbleGap
	},
	bubbleRightText: {
		color: lib.colors.white,
		...lib.typography.body.text
	}
})

export const Background = styles.View`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-color: ${lib.colors.secondary[300]};
`
