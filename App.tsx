import { ApolloProvider } from '@apollo/client'
import React, { useCallback } from 'react'
import { View } from 'react-native'

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import apolloClient from 'api/index'

import AppContextWrapper from 'context/AppContextWrapper'
import AppWrapper from 'components/AppWrapper'

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
		<AppContextWrapper>
			<ApolloProvider client={apolloClient}>
				<View onLayout={onLayoutRootView}>
				<AppWrapper />
				</View>
			</ApolloProvider>
		</AppContextWrapper>
	)
}
