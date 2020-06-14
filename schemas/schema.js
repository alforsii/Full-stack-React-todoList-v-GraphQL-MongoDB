const Todo = require('../models/Todos.model');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
} = require('graphql');

//Todo types schema
const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    completed: { type: GraphQLBoolean },
  }),
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    //get all todos from mongoDB todos collections
    todos: {
      type: GraphQLList(TodoType),
      resolve: (root, args, context, info) => {
        return Todo.find().exec();
      },
    },
    //get one todo by id
    todo: {
      type: TodoType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: (root, args, context, info) => {
        return Todo.findById(args.id).exec();
      },
    },
  },
});

const MutationQuery = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    //create todo
    addTodo: {
      type: TodoType,
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        title: { type: GraphQLNonNull(GraphQLString) },
        completed: { type: GraphQLNonNull(GraphQLBoolean) },
      },
      resolve: (root, args, context, info) => {
        //1.One way - Create
        return Todo.create(args);
        // //2.One way - Create
        // const newTodo = new Todo(args);
        // return newTodo.save();
      },
    },
    //remove todo
    removeTodo: {
      type: TodoType,
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (root, args, context, info) => {
        return Todo.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: MutationQuery,
});
