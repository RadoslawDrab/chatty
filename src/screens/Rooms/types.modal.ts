import { ChatParams } from '../../types.modal'

export interface RoomItemProps {
	id: string
	onNavigate: (options: ChatParams) => void
}

export type Status = 'active' | string

export interface Item {
	id: string
	name: string
	message: string
	image: string
	status: Status
	read: boolean
}
