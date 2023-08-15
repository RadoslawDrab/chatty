import { gql } from '@apollo/client'

export const GET_USERS_ROOMS = gql`
	query GetUsersRooms {
		usersRooms {
			rooms {
				id
				name
			}
		}
	}
`
export const GET_ROOM = gql`
	query GetRoom($roomId: String!) {
		room(id: $roomId) {
			id
			messages {
				body
				id
				insertedAt
				user {
					id
					firstName
				}
			}
			name
			user {
				id
				firstName
			}
		}
	}
`
