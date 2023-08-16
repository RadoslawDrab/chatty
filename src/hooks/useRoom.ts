import { useQuery } from '@apollo/client'

import { GET_ROOM } from 'api/queries'

import { RoomType } from 'api/types.modal'

export const useRoom = (roomId: string) => {
	const { loading, error, data } = useQuery(GET_ROOM, {
		variables: { roomId }
	})
	const room: RoomType | undefined = data?.room
	return { loading, error, room }
}
