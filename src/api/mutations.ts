import { gql } from '@apollo/client'

export const SEND_MESSAGE = gql`
	mutation SendMessage($body: String!, $roomId: String!) {
		sendMessage(body: $body, roomId: $roomId) {
			body
			id
			insertedAt
			user {
				id
				firstName
				lastName
				role
				email
			}
		}
	}
`
export const LOGIN_USER = gql`
	mutation LoginUser($email: String!, $password: String!) {
		loginUser(email: $email, password: $password) {
			token
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
