import { StyleSheet } from 'react-native'
import { css } from 'styled-components'
import styles from 'styled-components/native'

import lib from 'styles/library'

export default StyleSheet.create({
	container: {
		paddingVertical: lib.sizing.small,
		paddingHorizontal: lib.sizing.medium,
		backgroundColor: lib.colors.white,
		marginTop: lib.sizing.small
	}
})

export const Pressable = styles.Pressable`
	flex-shrink: 1;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${lib.sizing.medium}px;
`
export const Image = styles.Image`
  width: 64px;
`
export const Info = styles.View`
	flex-shrink: 1;
  display: flex;
  align-items: flex-start;
  gap: 4px;
`
export const Name = styles.Text<{ $read: boolean }>`
	flex-shrink: 1;
	max-width: 85%;
  font-size: ${lib.typography.title.fontSize}px;
  font-weight: ${lib.typography.title.fontWeight};
  font-family: ${lib.typography.title.fontFamily};
  line-height: ${lib.typography.title.lineHeight}px;
  ${(props) => {
		if (props.$read) {
			return css`
				color: ${lib.colors.black};
			`
		} else {
			return css`
				color: ${lib.colors.white};
			`
		}
	}}
`
export const Message = styles.Text<{ $read: boolean }>`
  font-size: ${lib.typography.body.text.fontSize}px;
  font-weight: ${lib.typography.body.text.fontWeight};
  font-family: ${lib.typography.body.text.fontFamily};
  ${(props) => {
		if (props.$read) {
			return css`
				color: ${lib.colors.black};
			`
		} else {
			return css`
				color: ${lib.colors.white};
			`
		}
	}}
`
export const Status = styles.View`
  position: absolute;
  right: 0;
  top: 0;
`
export const ActiveStatusIndicator = styles.View`
  background-color: ${lib.colors.active};
	border-radius: 50%;
  height: ${lib.sizing.small}px;
  width: ${lib.sizing.small}px;
`
export const StatusText = styles.Text`
  font-size: ${lib.typography.body.specialText.fontSize}px;
  font-weight: ${lib.typography.body.specialText.fontWeight};
  font-family: ${lib.typography.body.specialText.fontFamily};
  line-height: ${lib.typography.body.specialText.lineHeight}px;
  color: ${lib.colors.gray[500]};
`
