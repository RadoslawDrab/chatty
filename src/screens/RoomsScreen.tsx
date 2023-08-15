import { FlatList, SafeAreaView } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { AppStackParamList } from '../../App'

import { Item } from './Rooms/types'
import RoomItem from './Rooms/RoomItem'

import lib from 'styles/library'

const RoomsScreen = (props: NativeStackScreenProps<AppStackParamList, 'Rooms'>) => {
	const rooms: Item[] = [
		{
			id: '0',
			name: 'Room 1',
			message: 'Hey!',
			image: '',
			status: 'active',
			read: false
		},
		{
			id: '1',
			name: 'Room 2',
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ratione ipsum, voluptate fugit fugiat iste soluta dolorem rem dicta!',
			image: '',
			status: 'active',
			read: true
		},
		{
			id: '3',
			name: 'Room 3',
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ratione ipsum, voluptate fugit fugiat iste soluta dolorem rem dicta!',
			image: '',
			status: new Date('2023-08-15T14:04:00Z'),
			read: true
		}
	]

	function navigateToChat(item: Item) {
		props.navigation.navigate('Chat', {
			name: item.name,
			status: item.status,
			image: item.image
		})
	}

	return (
		<SafeAreaView style={{ marginTop: lib.sizing.big }}>
			<FlatList
				data={rooms}
				renderItem={(item) => <RoomItem item={item.item} onNavigate={navigateToChat} />}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	)
}
export default RoomsScreen
