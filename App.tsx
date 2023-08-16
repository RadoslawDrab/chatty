import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { useFonts } from 'expo-font'

import apolloClient from 'api/index'

import AppWrapper from 'components/AppWrapper'
import AppContextWrapper from 'context/AppContextWrapper'

const fonts = {
	PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
	PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
	PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
	PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
	SFCompactTextRegular: require('./assets/fonts/SF-Compact-Text-Regular.ttf'),
	SFCompactDisplayRegular: require('./assets/fonts/SF-Compact-Display-Regular.ttf'),
	SFCompactDisplayBold: require('./assets/fonts/SF-Compact-Display-Bold.ttf')
}

export default function App() {
	const [fontsLoaded, fontError] = useFonts(fonts)

	if (fontError) {
		return <ActivityIndicator />
	}

	return (
		<AppContextWrapper>
			<ApolloProvider client={apolloClient}>
				<View style={{ flex: 1 }}>{fontsLoaded ? <AppWrapper /> : <ActivityIndicator />}</View>
			</ApolloProvider>
		</AppContextWrapper>
	)
}
