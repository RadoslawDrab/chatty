export type AppStackParamList = {
	Rooms: undefined
	Chat: ChatParams
}
export type ChatParams = {
	image: string
	name: string
	status: 'active' | Date
}
