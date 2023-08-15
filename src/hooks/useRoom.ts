import { useQuery } from '@apollo/client'

import { GET_ROOM, GET_USERS_ROOMS } from 'api/queries'
import { RoomType, RoomsType } from 'api/types'

export const useRoom = (roomId: string) => {
	const { loading, error, data } = useQuery(GET_ROOM, {
		variables: { roomId }
	})
	const d: RoomType = data?.room
	return { loading, error, data: d }
}
export const useUsersRooms = () => {
	const { loading, error, data } = useQuery(GET_USERS_ROOMS)
	const d: RoomsType = data?.usersRooms
	return { loading, error, data: d }
}
