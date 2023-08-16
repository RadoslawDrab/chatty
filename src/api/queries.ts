import { gql } from '@apollo/client'

export const GET_USER = gql`
	query GetUser {
		user {
			id
			firstName
			lastName
			role
			email
		}
	}
`
export const GET_USERS_ROOMS = gql`
	query GetUsersRooms {
		usersRooms {
			rooms {
				id
				name
			}
			user {
				id
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
					lastName
					email
					role
				}
			}
			name
			user {
				id
				firstName
				lastName
				email
				role
			}
		}
	}
`
