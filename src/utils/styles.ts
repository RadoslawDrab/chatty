import { css } from 'styled-components'
import styles from 'styles/typography'

type TextType =
	| 'button'
	| 'label'
	| 'title'
	| 'caption'
	| 'heading.1'
	| 'heading.2'
	| 'heading.3'
	| 'heading.4'
	| 'body.text'
	| 'body.caption'
	| 'body.specialText'

export function getCssText(textType: TextType, color?: string) {
	const style: any = (() => {
		switch (textType) {
			case 'heading.1':
				return styles.heading[1]
			case 'heading.2':
				return styles.heading[2]
			case 'heading.3':
				return styles.heading[3]
			case 'heading.4':
				return styles.heading[4]
			case 'body.text':
				return styles.body.text
			case 'body.caption':
				return styles.body.caption
			case 'body.specialText':
				return styles.body.specialText
			default:
				return styles[textType]
		}
	})()
	return css`
		${color ? `color: ${color};` : ''}
		${style.fontFamily ? `font-family: ${style.fontFamily}` : ''};
		${style.fontWeight ? `font-weight: ${style.fontWeight}` : ''};
		${style.fontSize ? `font-size: ${style.fontSize}px` : ''};
		${style.lineHeight ? `line-height: ${style.lineHeight}px` : ''};
		${style.letterSpacing ? `letter-spacing: ${style.letterSpacing}px` : ''};
	`
}
