export interface Data {
	room: RoomType
	usersRooms: RoomsType
	user: UserType
}

export interface RoomsType {
	usersRooms: {
		rooms: SingleRoomType[]
	}
	user: UserType
}
export interface SingleRoomType {
	id: string
	name: string
}
export interface RoomType {
	id: string
	messages: Message[]
	name: string
	user: UserType
}
export interface UserType {
	email: string
	firstName: string
	lastName: string
	role: string
	id: string
}
export interface Message {
	body: string
	id: string
	insertedAt: string
	user: UserType
}
export interface SessionType {
	token: string
	user: UserType
}
