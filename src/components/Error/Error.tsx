import { ErrorProps } from './types.modal'

import { ErrorText, ErrorView } from './styles'

const Error = (props: ErrorProps) => {
	return (
		<ErrorView>
			<ErrorText>{props.error ?? 'Something went wrong!'}</ErrorText>
		</ErrorView>
	)
}
export default Error
