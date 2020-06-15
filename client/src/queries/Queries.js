import { gql } from 'apollo-boost';

export const getTodosQuery = gql`
  query {
    todos {
      _id
      title
      completed
    }
  }
`;

export const getTodoQuery = gql`
  query($id: String!) {
    todo(id: $id) {
      _id
      title
      completed
    }
  }
`;

export const addTodoMutation = gql`
  mutation($title: String!) {
    addTodo(title: $title) {
      _id
      title
      completed
    }
  }
`;

export const removeTodoMutation = gql`
  mutation($id: String!) {
    removeTodoById(id: $id) {
      _id
      title
      completed
    }
  }
`;

export const updateTodoMutation = gql`
  mutation($id: String!, $title: String!, $completed: Boolean!) {
    updateTodoById(id: $id, title: $title, completed: $completed) {
      _id
      title
      completed
    }
  }
`;
