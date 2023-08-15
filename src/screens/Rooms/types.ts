export interface RoomItemProps {
	item: Item
	onNavigate: (item: Item) => void
}

type Status = 'active' | string
export interface Item {
	id: string
	name: string
	message: string
	image: string
	status: Status
	read: boolean
}
