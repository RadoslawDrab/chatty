import { useState } from 'react'
import { View } from 'react-native'

import { Credentials } from './types.modal'

import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import styles, {
	FormFooterText,
	FormFooterView,
	FormInput,
	FormInputText,
	FormView,
	SignUpButtonText,
	SubmitButtonText
} from './styles'

const LoginForm = (props: any) => {
	const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '' })

	function onTextChange(text: string, type: 'email' | 'password') {
		setCredentials((prev) => ({ ...prev, [type]: text }))
	}
	return (
		<FormView>
			<FormInput>
				<FormInputText>e-mail address</FormInputText>
				<Input onTextChange={(text) => onTextChange(text, 'email')} attr={{ autoComplete: 'email' }} />
			</FormInput>
			<FormInput>
				<FormInputText>password</FormInputText>
				<Input onTextChange={(text) => onTextChange(text, 'password')} attr={{ autoComplete: 'password' }} />
			</FormInput>
			<View style={{ flex: 1 }} />
			<Button style={styles.logInButton} onPress={() => props.onLogin(credentials)}>
				<SubmitButtonText>Log in</SubmitButtonText>
			</Button>
			<FormFooterView>
				<FormFooterText>Don't have an account?</FormFooterText>
				<Button variant="transparent">
					<SignUpButtonText>Sign up</SignUpButtonText>
				</Button>
			</FormFooterView>
		</FormView>
	)
}
export default LoginForm
