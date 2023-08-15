import styles from 'styled-components/native'

import lib from 'styles/library'

export const StatusView = styles.View`
  display: flex;
  gap: 2px;
`
export const Name = styles.Text`
  color: ${lib.colors.primary[500]};
  font-weight: ${lib.typography.heading[4].fontWeight};
  font-size: ${lib.typography.heading[4].fontSize}px;
`
export const Status = styles.Text`
  color: ${lib.colors.white};
  font-weight: ${lib.typography.body.text.fontWeight};
  font-size: ${lib.typography.body.text.fontSize}px;
`
