import { SafeAreaView } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import RoomsHeader from './RoomsHeader/RoomsHeader'
import ChatHeader from './ChatHeader/ChatHeader'

import { Background, ContainerWrapper } from './styles'

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
			<ContainerWrapper>
				<Background />
				{content}
			</ContainerWrapper>
		</SafeAreaView>
	)
}
export default Header
