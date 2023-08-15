import { GRAPHQL_SERVER_URL, GRAPHQL_TOKEN } from '@env'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
	uri: GRAPHQL_SERVER_URL
})

const authLink = setContext((_, { headers }) => {
	const token = GRAPHQL_TOKEN

	// Return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	}
})
const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
})
export default client
