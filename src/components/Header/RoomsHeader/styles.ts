import styles from 'styled-components/native'

import lib from 'styles/library'

export const Text = styles.Text`
	font-size: ${lib.typography.heading[1].fontSize}px;
	font-weight: ${lib.typography.heading[1].fontWeight};
	color: ${lib.colors.primary[500]};
`
