import { View } from 'react-native'
import { ComposerProps } from 'react-native-gifted-chat'

import Input from 'components/Input/Input'

import lib from 'styles/library'

export function renderComposer(props: ComposerProps) {
	return (
		<View style={{ flex: 1 }}>
			<Input
				attr={props}
				style={{ marginRight: lib.sizing.small }}
				borderRadius={{ bottomRight: 0 }}
				onTextChange={props.onTextChanged}
				text={props.text}
			/>
		</View>
	)
}
