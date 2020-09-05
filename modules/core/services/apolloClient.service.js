import { ApolloClient, InMemoryCache } from '@apollo/client'

export default new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})