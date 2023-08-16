import { FlatList, SafeAreaView } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import useApp from 'hooks/useApp'

import { AppStackParamList, ChatParams } from '../types.modal'

import RoomItem from './Rooms/RoomItem'
import { PageBackground } from 'styles/generic'

import lib from 'styles/library'

const RoomsScreen = (props: NativeStackScreenProps<AppStackParamList, 'Rooms'>) => {
	const [state] = useApp()

	const rooms: string[] = state.rooms.map((room) => room.id)

	function navigateToChat(params: ChatParams) {
		props.navigation.navigate('Chat', params)
	}

	return (
		<PageBackground>
			<SafeAreaView style={{ flex: 1, marginTop: lib.sizing.big }}>
				<FlatList
					data={rooms}
					renderItem={(id) => <RoomItem id={id.item} onNavigate={navigateToChat} />}
					keyExtractor={(id) => id}
				/>
			</SafeAreaView>
		</PageBackground>
	)
}
export default RoomsScreen
