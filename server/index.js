const express = require('express');
const app = express();
const PORT = 3001;
const userData = require('./MOCK_DATA.json');
const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
} = graphql;
const graphqlHTTP = require('express-graphql');

const userType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: {
			type: GraphQLInt,
		},
		firstName: {
			type: GraphQLString,
		},
		lastName: {
			type: GraphQLString,
		},
		email: {
			type: GraphQLString,
		},
		password: {
			type: GraphQLString,
		},
	}),
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		getAllUsers: {
			type: new GraphQLList(UserType),
		},
	},
});
const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	filds: {
		createUser: {
			type: userType,
			args: {
				firstName: {
					type: GraphQLString,
				},
				lastName: {
					type: GraphQLString,
				},
				email: {
					type: GraphQLString,
				},
				password: {
					type: GraphQLString,
				},
				resolve(parent, args) {
					userData.push({
						id: userData.length + 1,
						firstName: args.firstName,
						lastName: args.lastName,
						email: args.email,
						password: args.password,
					});
					return args;
				},
			},
		},
	},
});

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
