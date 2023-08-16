import { GRAPHQL_SERVER_URL, GRAPHQL_TOKEN } from '@env'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
	uri: GRAPHQL_SERVER_URL
})

export default getClient(GRAPHQL_TOKEN)

// Gets Apollo Client based on given token
export function getClient(token: string) {
	const authLink = setContext((_, { headers }) => {
		// Return the headers to the context so httpLink can read them
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : ''
			}
		}
	})
	return new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache()
	})
}
