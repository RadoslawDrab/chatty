import { IMessage, InputToolbar, InputToolbarProps } from 'react-native-gifted-chat'

import { renderComposer } from './Composer'

import { PageBackground } from 'styles/generic'

import styles, { Background } from './styles'

export function renderInputToolbar(props: InputToolbarProps<IMessage>) {
	return (
		<PageBackground>
			<InputToolbar {...props} containerStyle={styles.toolbar} renderComposer={renderComposer} />
			<Background />
		</PageBackground>
	)
}
