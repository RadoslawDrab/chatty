import { SingleRoomType, UserType } from 'api/types.modal'

export interface State {
	user: UserType
	rooms: SingleRoomType[]
}
export type Actions = SetUser | SetUsersRooms

type SetUser = {
	type: 'SET_USER'
	user: Partial<UserType>
}
type SetUsersRooms = {
	type: 'SET_USERS_ROOMS'
	rooms: SingleRoomType[]
}
