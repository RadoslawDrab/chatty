import { SafeAreaView } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import Container from 'components/Container/Container'
import RoomsHeader from './RoomsHeader/RoomsHeader'
import ChatHeader from './ChatHeader/ChatHeader'

import styles, { Background } from './styles'

const Header = (props: NativeStackHeaderProps) => {
	const content = (() => {
		switch (props.route.name) {
			case 'Rooms': {
				return <RoomsHeader {...props} />
			}
			default: {
				return <ChatHeader {...props} />
			}
		}
	})()

	return (
		<SafeAreaView>
			<Container borderRadius={{ bottom: true }} variant="big" styles={styles.header}>
				<Background />
				{content}
			</Container>
		</SafeAreaView>
	)
}
export default Header
