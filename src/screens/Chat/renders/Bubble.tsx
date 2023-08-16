import { Bubble, BubbleProps, IMessage } from 'react-native-gifted-chat'

import styles from './styles'

export function renderBubble(props: BubbleProps<IMessage>) {
	return (
		<Bubble
			{...props}
			wrapperStyle={{ left: styles.bubbleLeft, right: styles.bubbleRight }}
			textStyle={{ left: styles.bubbleLeftText, right: styles.bubbleRightText }}
		/>
	)
}
