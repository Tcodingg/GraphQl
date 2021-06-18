const express = require('express');
const app = express();
const PORT = 6969;
const cors = require('cors');
const userData = require('./MOCK_DATA.json');
const graphql = require('graphql');

app.use(cors());
const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
} = graphql;
const { graphqlHTTP } = require('express-graphql');

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

// creating the query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		getAllUsers: {
			type: new GraphQLList(userType),
			args: { id: { type: GraphQLInt } },
			resolve(parent, args) {
				return userData;
			},
		},
	},
});

//update and delete data
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
			},
			resolve(parent, args) {
				//userData.push since the data is an array
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
});

const schema = new GraphQLSchema({
	query: RootQuery,
	Mutation: Mutation,
});
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);
app.listen(PORT, () => console.log('server is running'));
