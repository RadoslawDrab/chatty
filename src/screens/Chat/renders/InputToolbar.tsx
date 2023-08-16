import { View } from 'react-native'
import { IMessage, InputToolbar, InputToolbarProps } from 'react-native-gifted-chat'

import { renderComposer } from './Composer'

import styles, { Background } from './styles'

export function renderInputToolbar(props: InputToolbarProps<IMessage>) {
	return (
		<View style={{ flex: 1 }}>
			<InputToolbar {...props} primaryStyle={styles.toolbar} renderComposer={renderComposer} />
			<Background />
		</View>
	)
}
