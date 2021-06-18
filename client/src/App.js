import React from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetUsers from './components/GetUsers';

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
	if (graphqlErrors) {
		graphqlErrors.map(({ message, location, path }) => {
			return alert(`graphql error ${message}`);
		});
	}
});

const link = from([
	errorLink,
	new HttpLink({ uri: 'http://localhost:6969/graphql' }),
]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});

export default function App() {
	return (
		<ApolloProvider client={client}>
			<GetUsers />
		</ApolloProvider>
	);
}
