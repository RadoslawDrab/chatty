import styles from 'styled-components/native'

import { getCssText } from 'utils/styles'

import lib from 'styles/library'

export const Text = styles.Text`
	${getCssText('heading.1', lib.colors.primary[500])}
`
