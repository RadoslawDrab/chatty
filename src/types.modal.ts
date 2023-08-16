import { Status } from 'screens/Rooms/types.modal'

export type AppStackParamList = {
	Rooms: undefined
	Chat: ChatParams
	Login: undefined
}
export type ChatParams = {
	roomId: string
	name: string
	status: Status
}
