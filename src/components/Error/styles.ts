import styles from 'styled-components/native'

import { getCssText } from 'utils/styles'

import lib from 'styles/library'

export const ErrorView = styles.View`
  align-self: center;
  background-color: ${lib.colors.error};
  padding: ${lib.sizing.small}px ${lib.sizing.medium}px;
  margin: ${lib.sizing.small}px;
`
export const ErrorText = styles.Text`
  ${getCssText('heading.4', lib.colors.white)}
`
