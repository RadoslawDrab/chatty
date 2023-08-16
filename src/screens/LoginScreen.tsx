import { useMutation } from '@apollo/client'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ActivityIndicator, SafeAreaView } from 'react-native'

import { LOGIN_USER } from 'api/mutations'

import { SessionType } from 'api/types.modal'
import { AppStackParamList } from 'types.modal'
import { Credentials } from './Login/types.modal'

import Error from 'components/Error/Error'
import { PageBackgroundAlternative } from 'styles/generic'
import Header from './Login/Header'
import LoginForm from './Login/LoginForm'

import lib from 'styles/library'

const LoginScreen = (props: NativeStackScreenProps<AppStackParamList, 'Login'>) => {
	const [logIn, { loading, error }] = useMutation<SessionType, Credentials>(LOGIN_USER)

	async function onLogin(credentials: Credentials) {
		const session = await logIn({
			variables: credentials
		})
		// User's token to log in as Apollo Client
		const token = session.data?.token ?? ''
		// Logged in user
		const user = session.data?.user ?? {}

		props.navigation.replace('Rooms')
	}

	return (
		<PageBackgroundAlternative>
			<SafeAreaView style={{ flex: 1, margin: lib.sizing.medium }}>
				{!loading || error ? (
					<>
						<Header />
						{error && <Error error={error.message} />}
						<LoginForm onLogin={onLogin} />
					</>
				) : (
					<ActivityIndicator style={{ flex: 1 }} />
				)}
			</SafeAreaView>
		</PageBackgroundAlternative>
	)
}
export default LoginScreen
