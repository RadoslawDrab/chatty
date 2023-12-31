import { useEffect, useState } from 'react'

import { InputProps } from './types.modal'

import ClearIcon from '@assets/icons/clear.svg'

import styles, { TextInput, InputWrapper } from './styles'

const Input = (props: InputProps) => {
	const [text, setText] = useState<string>(props.attr?.defaultValue ?? '')
	const [focused, setFocused] = useState<boolean>(false)

	useEffect(() => {
		if (props.onTextChange) props.onTextChange(text)
	}, [])

	function onChangeText(text: string) {
		setText(text)
		if (props.onTextChange) props.onTextChange(text)
	}
	function onClear() {
		setText('')
		if (props.onClear) props.onClear()
		if (props.onTextChange) props.onTextChange('')
	}
	return (
		<InputWrapper>
			<TextInput
				{...props.attr}
				value={props.text ?? text}
				onChangeText={onChangeText}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				style={props.style}
				$states={{ ...props.states, focus: focused }}
				$borderRadius={props.borderRadius ?? {}}
			/>
			{(props.text ?? text) && focused && <ClearIcon style={styles.button} onPress={onClear} />}
		</InputWrapper>
	)
}
export default Input
