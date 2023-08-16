import { StyleSheet } from 'react-native'
import styles from 'styled-components/native'

import lib from './library'

export const PageBackground = styles.View`
  flex: 1;
  background-color: ${lib.colors.secondary[100]};
`
export const PageBackgroundStyleSheet = StyleSheet.create({
	style: {
		flex: 1,
		backgroundColor: lib.colors.secondary[100]
	}
})
