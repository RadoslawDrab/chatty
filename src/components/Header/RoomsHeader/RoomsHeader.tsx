import Button from 'components/Button/Button'

import { Wrapper } from '../styles'
import { Text } from './styles'

import SearchIcon from '@assets/icons/search.svg'
import RoomsIcon from '@assets/icons/rooms.svg'

const RoomsHeader = (props: any) => {
	return (
		<>
			<Text>{props.route.name}</Text>
			<Wrapper>
				<Button variant="circle" iconComponent={SearchIcon} />
				<Button variant="circle" iconComponent={RoomsIcon} />
			</Wrapper>
		</>
	)
}
export default RoomsHeader
