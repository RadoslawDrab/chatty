import { useState } from 'react'

import { ButtonProps } from './types.modal'

import { Pressable, Text } from './styles'

const Button = (props: ButtonProps) => {
	const [isActive, setIsActive] = useState(false)

	const text = props.text ?? 'Button'

	function onPressOut() {
		setIsActive(false)
		if (props.onActive) props.onActive(false)
	}
	function onPressIn() {
		setIsActive(true)
		if (props.onActive) props.onActive(true)
	}

	return (
		<Pressable
			onPress={props.onPress}
			onPressOut={onPressOut}
			onPressIn={onPressIn}
			disabled={props.disabled}
			style={props.style}
			$active={isActive}
			$variant={props.variant}>
			{props?.children}
			{props.iconComponent && <props.iconComponent {...props.iconStyles} />}
			{((!props.children && !props.iconComponent) ?? props.text) && <Text>{text}</Text>}
		</Pressable>
	)
}
export default Button
