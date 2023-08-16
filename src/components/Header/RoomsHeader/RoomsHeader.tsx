import RoomsIcon from '@assets/icons/rooms.svg'
import SearchIcon from '@assets/icons/search.svg'
import IconButton from 'components/Button/IconButton/IconButton'

import { Wrapper } from '../styles'
import { Text } from './styles'

const RoomsHeader = (props: any) => {
	return (
		<>
			<Text>{props.route.name}</Text>
			<Wrapper>
				<IconButton variant="circle" iconComponent={SearchIcon} />
				<IconButton variant="circle" iconComponent={RoomsIcon} />
			</Wrapper>
		</>
	)
}
export default RoomsHeader
