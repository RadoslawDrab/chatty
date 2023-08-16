import { FlatList, SafeAreaView } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { useUsersRooms } from 'hooks/useRoom'

import { AppStackParamList, ChatParams } from '../types.modal'

import RoomItem from './Rooms/RoomItem'
import { PageBackground } from 'styles/generic'

import lib from 'styles/library'

const RoomsScreen = (props: NativeStackScreenProps<AppStackParamList, 'Rooms'>) => {
	const { loading, error, data } = useUsersRooms()

	if (loading) {
		return <></>
	}
	if (error) {
		return <></>
	}

	const rooms: string[] = data?.rooms.map((room) => room.id)

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
