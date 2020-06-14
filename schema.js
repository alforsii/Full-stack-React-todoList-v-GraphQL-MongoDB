const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} = require('graphql');

//Todos types
const TodosListType = new GraphQLObjectType({
  name: 'Todos',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    completed: { type: GraphQLBoolean },
  }),
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    Todos: {
      type: new GraphQLList(TodosListType),
      resolve(parent, args) {
        return axios
          .get('https://jsonplaceholder.typicode.com/todos')
          .then((res) => res.data);
      },
    },
    Todo: {
      type: TodosListType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`https://jsonplaceholder.typicode.com/todos/${args.id}`)
          .then((res) => res.data);
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
});
