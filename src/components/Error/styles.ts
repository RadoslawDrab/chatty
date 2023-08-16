import styles from 'styled-components/native'

import lib from 'styles/library'

export const ErrorView = styles.View`
  align-self: center;
  background-color: ${lib.colors.error};
  padding: ${lib.sizing.small}px ${lib.sizing.medium}px;
  margin: ${lib.sizing.small}px;
`
export const ErrorText = styles.Text`
  color: ${lib.colors.white};
  font-size: ${lib.typography.heading[4].fontSize}px;
  font-weight: ${lib.typography.heading[4].fontWeight}px;
  font-family: ${lib.typography.heading[4].fontFamily};
`
