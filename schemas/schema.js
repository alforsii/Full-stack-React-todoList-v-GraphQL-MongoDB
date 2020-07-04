const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const { todosQueries, todosMutations } = require('./todos');
const { launchQueries } = require('./spaceX');

// Readings - GET
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...todosQueries,
    ...launchQueries,
  },
});

// Mutations - POST - ADD,REMOVE and UPDATE
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...todosMutations,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
