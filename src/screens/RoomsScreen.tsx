import { FlatList, SafeAreaView } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { useUsersRooms } from 'hooks/useRoom'

import { AppStackParamList, ChatParams } from '../../types'

import RoomItem from './Rooms/RoomItem'

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
		<SafeAreaView style={{ marginTop: lib.sizing.big }}>
			<FlatList
				data={rooms}
				renderItem={(id) => <RoomItem id={id.item} onNavigate={navigateToChat} />}
				keyExtractor={(id) => id}
			/>
		</SafeAreaView>
	)
}
export default RoomsScreen
