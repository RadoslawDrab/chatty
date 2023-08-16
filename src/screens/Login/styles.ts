import { StyleSheet } from 'react-native'
import styles from 'styled-components/native'

import { getCssText } from 'utils/styles'

import lib from 'styles/library'

export default StyleSheet.create({
	logInButton: {
		borderRadius: lib.sizing.small
	}
})

export const HeaderView = styles.View`
  flex-shrink: 1;
  padding: ${lib.sizing.medium}px;
  margin-top: ${lib.sizing.big}px;
  margin-bottom: ${lib.sizing.medium}px;
  display: flex;
  gap: ${lib.sizing.big}px;
`
export const HeaderHeading = styles.Text`
  ${getCssText('heading.1', lib.colors.primary[500])}
`
export const HeaderSubHeading = styles.Text`
  ${getCssText('heading.2', lib.colors.white)}
`
export const FormView = styles.View`
  flex: 1;
  gap: ${lib.sizing.medium}px;
  padding: ${lib.sizing.medium}px;
`
export const FormInput = styles.View`
  flex-shrink: 1;
  gap: 4px;
`
export const FormInputText = styles.Text`
  flex-shrink: 1;
  ${getCssText('label', lib.colors.white)}
  `
export const SubmitButtonText = styles.Text`
  ${getCssText('button', lib.colors.white)}
  text-align: center;
  border-radius: ${lib.sizing.small}px;
  padding: ${lib.sizing.small}px;
`
export const FormFooterView = styles.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: ${lib.sizing.small}px;
`
export const FormFooterText = styles.Text`
  ${getCssText('body.text', lib.colors.white)}
`
export const SignUpButtonText = styles.Text`
  ${getCssText('button', lib.colors.primary[500])}
`
