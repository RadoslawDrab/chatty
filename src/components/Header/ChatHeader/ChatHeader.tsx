import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { clipText, getDateDifference } from 'utils'

import { ChatParams } from '../../../../types'

import PhoneIcon from '@assets/icons/phone.svg'
import VideoIcon from '@assets/icons/videocall.svg'
import CaretLeftIcon from '@assets/icons/caret-left.svg'
import ProfileIcon from '@assets/icons/profile.svg'
import Button from 'components/Button/Button'
import IconButton from 'components/Button/IconButton/IconButton'
import { Wrapper } from '../styles'
import { Name, Status, StatusView } from './styles'
import lib from 'styles/library'

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
			<Wrapper $gap={4}>
				<IconButton
					variant="transparent"
					onPress={props.navigation.goBack}
					iconComponent={CaretLeftIcon}
					iconStyles={{ height: 32, width: 32 }}
					activeIconStyle={{ color: lib.colors.primary[500] }}
					inactiveIconStyle={{ color: lib.colors.primary[700] }}
				/>
				<Wrapper $gap={lib.sizing.small}>
					<ProfileIcon height={44} width={44} />
					<StatusView>
						<Name>{clipText(params.name, 20)}</Name>
						<Status>{status}</Status>
					</StatusView>
				</Wrapper>
			</Wrapper>
			<Wrapper>
				<Button variant="circle" iconComponent={PhoneIcon} />
				<Button variant="circle" iconComponent={VideoIcon} />
			</Wrapper>
		</>
	)
}
export default ChatHeader
