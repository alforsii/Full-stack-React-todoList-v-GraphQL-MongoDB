const Todo = require('../models/Todo.model');

const {
  GraphQLObjectType,
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
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    completed: { type: GraphQLBoolean },
  }),
});

const todosQueries = {
  //get all todos from mongoDB todos collections
  todos: {
    type: new GraphQLList(TodoType),
    resolve: () => {
      return Todo.find().exec();
    },
  },
  //get one todo by id
  todo: {
    type: TodoType,
    args: {
      id: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (root, args, context, info) => {
      return Todo.findById(args.id).exec();
    },
  },
};

const todosMutations = {
  //create todo
  addTodo: {
    type: TodoType,
    args: {
      title: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (root, args, context, info) => {
      //1.One way - Create
      return Todo.create(args);
      // //2.One way - Create
      // const newTodo = new Todo(args);
      // return newTodo.save();
    },
  },
  //remove todo with findOneAndDelete
  removeTodo: {
    type: TodoType,
    args: {
      id: { type: GraphQLNonNull(GraphQLInt) }, //id type a number
    },
    resolve: (root, args, context, info) => {
      //2.remove by our id - which is a number
      return Todo.findOneAndDelete({ id: args.id });
    },
  },
  //remove todo with findByIdAndRemove
  removeTodoById: {
    type: TodoType,
    args: {
      id: { type: GraphQLNonNull(GraphQLString) }, //_id type a string
    },
    resolve: (root, args, context, info) => {
      //1.remove by our _id - which is a string(mongo _id)
      return Todo.findByIdAndRemove(args.id);
    },
  },
  //update todo with findByIdAndUpdate
  updateTodoById: {
    type: TodoType,
    args: {
      id: { type: GraphQLNonNull(GraphQLString) }, //id type a string
      title: { type: GraphQLNonNull(GraphQLString) },
      completed: { type: GraphQLNonNull(GraphQLBoolean) },
    },
    resolve: (root, args, context, info) => {
      //1.update by id
      return Todo.findByIdAndUpdate(
        args.id,
        { title: args.title, completed: args.completed },
        { new: true }
      );
    },
  },
};

module.exports = { todosQueries, todosMutations };
