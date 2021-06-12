const express = require('express');
const app = express();
const PORT = 3001;
const userData = require('./MOCK_DATA.json');
const graphql = require('graphql');
const graphqlHTTP = require('express-graphql');

const RootQuery = 'query';
const mutation = 'mutation';

const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: mutation,
});
app.use(
	'/grapql',
	graphqlHTTP({
		schema,
		graphql: true,
	})
);
app.listen(PORT, () => console.log('server is running'));
