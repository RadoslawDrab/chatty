export interface RoomItemProps {
	item: Item
	onNavigate: (item: Item) => void
}

export interface Item {
	id: string
	name: string
	message: string
	image: string
	status: 'active' | Date
	read: boolean
}
