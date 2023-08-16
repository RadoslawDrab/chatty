import { useQuery } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { ActivityIndicator, Text } from 'react-native'

import { GET_USER, GET_USERS_ROOMS } from 'api/queries'
import useApp from 'hooks/useApp'

import { RoomsType, UserType } from 'api/types.modal'
import { AppStackParamList } from 'types.modal'

import ChatScreen from 'screens/ChatScreen'
import RoomsScreen from 'screens/RoomsScreen'

import Error from '@components/Error/Error'
import Header from '@components/Header/Header'
import { PageBackground } from 'styles/generic'

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppWrapper = () => {
	const [state, dispatch] = useApp()

	const { loading: roomsLoading, error: roomsError, data } = useQuery<RoomsType>(GET_USERS_ROOMS)
	const { loading: userLoading, error: userError, data: user } = useQuery<UserType>(GET_USER)

	useEffect(() => {
		if (data?.usersRooms.rooms) dispatch({ type: 'SET_USERS_ROOMS', rooms: data.usersRooms.rooms })
	}, [data?.usersRooms.rooms])
	useEffect(() => {
		if (user) dispatch({ type: 'SET_USER', user })
	}, [user])

	if (roomsLoading || userLoading) {
		return <ActivityIndicator />
	}
	if (userError) {
		return <Error error={userError.message} />
	}
	if (roomsError) {
		return <Error error={roomsError.message} />
	}

	return (
		<PageBackground>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Rooms" screenOptions={{ header: Header }}>
					<Stack.Screen name="Rooms" component={RoomsScreen} />
					<Stack.Screen name="Chat" component={ChatScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</PageBackground>
	)
}
export default AppWrapper
