import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { clipText, getDateDifference } from 'utils'

import { ChatParams } from '../../../types.modal'

import CaretLeftIcon from '@assets/icons/caret-left.svg'
import PhoneIcon from '@assets/icons/phone.svg'
import ProfileIcon from '@assets/icons/profile.svg'
import VideoIcon from '@assets/icons/videocall.svg'
import Button from 'components/Button/Button'
import IconButton from 'components/Button/IconButton/IconButton'

import lib from 'styles/library'
import { Wrapper } from '../styles'
import { Name, Status, StatusView } from './styles'

const ChatHeader = (props: NativeStackHeaderProps) => {
	const params: ChatParams = props.route.params as ChatParams
	const status: string = (() => {
		const status = params.status
		if (status === 'active') {
			return 'Active now'
		} else {
			return getDateDifference(new Date(status))
		}
	})()
	return (
		<>
			<Wrapper $gap={4} style={{ justifyContent: 'flex-start', maxWidth: '70%' }}>
				<IconButton
					variant="transparent"
					onPress={props.navigation.goBack}
					iconComponent={CaretLeftIcon}
					iconStyles={{ height: 32, width: 32 }}
					activeIconStyle={{ color: lib.colors.primary[500] }}
					inactiveIconStyle={{ color: lib.colors.primary[700] }}
				/>
				<Wrapper $gap={lib.sizing.small} style={{ maxWidth: '90%' }}>
					<ProfileIcon height={44} width={44} />
					<StatusView>
						<Name>{clipText(params.name, 35)}</Name>
						<Status>{status}</Status>
					</StatusView>
				</Wrapper>
			</Wrapper>
			<Wrapper style={{ maxWidth: '25%' }}>
				<Button variant="circle" iconComponent={PhoneIcon} />
				<Button variant="circle" iconComponent={VideoIcon} />
			</Wrapper>
		</>
	)
}
export default ChatHeader
