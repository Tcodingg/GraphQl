const express = require('express');
const app = express();
const PORT = 3001;
const userData = require('./MOCK_DATA.json');
const graphql, {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = require('graphql');
const graphqlHTTP = require('express-graphql');

const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
     firstName: {
      type: GraphQLString
     },
      lastName: {
      type: GraphQLString
    },
      email: {
      type: GraphQLString
    },
      password: {
      type: GraphQLString
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType), 
    }

  }
});
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
