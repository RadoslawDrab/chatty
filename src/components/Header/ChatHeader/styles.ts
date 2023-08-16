import styles from 'styled-components/native'

import { getCssText } from 'utils/styles'

import lib from 'styles/library'

export const StatusView = styles.View`
  max-width: 75%;
  flex-shrink: 1;
  display: flex;
  gap: 2px;
`
export const Name = styles.Text`
  flex-shrink: 1;
  ${getCssText('heading.4', lib.colors.primary[500])}
`
export const Status = styles.Text`
${getCssText('body.text', lib.colors.white)}

`
