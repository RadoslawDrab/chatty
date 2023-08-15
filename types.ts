import { Status } from 'screens/Rooms/types'

export type AppStackParamList = {
	Rooms: undefined
	Chat: ChatParams
}
export type ChatParams = {
	roomId: string
	name: string
	status: Status
}
