import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useCallback } from 'react'
import { View } from 'react-native'

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import apolloClient from 'api/index'

import { AppStackParamList } from './src/types.modal'

import ChatScreen from 'screens/ChatScreen'
import RoomsScreen from 'screens/RoomsScreen'

import Header from 'components/Header/Header'

const fonts = {
	PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
	PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
	PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
	PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf')
}

const Stack = createNativeStackNavigator<AppStackParamList>()

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [fontsLoaded, fontError] = useFonts(fonts)

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded, fontError])

	if (!fontsLoaded && !fontError) {
		return null
	}

	return (
		<ApolloProvider client={apolloClient}>
			<NavigationContainer>
				<View onLayout={onLayoutRootView}>
					<Stack.Navigator initialRouteName="Rooms" screenOptions={{ header: Header }}>
						<Stack.Screen name="Rooms" component={RoomsScreen} />
						<Stack.Screen name="Chat" component={ChatScreen} />
					</Stack.Navigator>
				</View>
			</NavigationContainer>
		</ApolloProvider>
	)
}
