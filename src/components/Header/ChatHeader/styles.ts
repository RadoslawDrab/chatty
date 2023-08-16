import styles from 'styled-components/native'

import lib from 'styles/library'

export const StatusView = styles.View`
  max-width: 75%;
  flex-shrink: 1;
  display: flex;
  gap: 2px;
`
export const Name = styles.Text`
  flex-shrink: 1;
  color: ${lib.colors.primary[500]};
  font-weight: ${lib.typography.heading[4].fontWeight};
  font-size: ${lib.typography.heading[4].fontSize}px;
  font-family: ${lib.typography.heading[4].fontFamily};
`
export const Status = styles.Text`
  color: ${lib.colors.white};
  font-weight: ${lib.typography.body.text.fontWeight};
  font-size: ${lib.typography.body.text.fontSize}px;
  font-family: ${lib.typography.body.text.fontFamily};
`
