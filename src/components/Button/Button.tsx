import { useState } from 'react'
import { GestureResponderEvent, Pressable, Text } from 'react-native'

import { ButtonProps } from './types.modal'

import styles from './styles'

const Button = (props: ButtonProps) => {
	const [isActive, setIsActive] = useState(false)

	const buttonStyles: any = (() => {
		let style = { ...styles.button, ...props.style }
		if (isActive) {
			return { ...style, ...styles.active }
		}
		if (props.disabled) {
			return { ...style, ...styles.disabled }
		}
		if (props.variant) {
			switch (props.variant) {
				case 'alternative':
					return { ...style, ...styles.buttonAlt }
			}
		}
		return style
	})()

	const text = props.text ?? 'Button'

	function onPress(event: GestureResponderEvent) {
		if (props.onPress) props.onPress(event)
	}
	function onPressOut(event: GestureResponderEvent) {
		setIsActive(false)
	}
	function onPressIn(event: GestureResponderEvent) {
		setIsActive(true)
	}

	return (
		<Pressable onPress={onPress} onPressOut={onPressOut} onPressIn={onPressIn} style={buttonStyles} disabled={props.disabled}>
			{props?.children}
			{!props.children && <Text style={buttonStyles.text}>{text}</Text>}
		</Pressable>
	)
}
export default Button
