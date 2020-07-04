import React from 'react';
import { graphql } from 'react-apollo';
import { getTodoQuery } from '../../queries/todoQueries';
import Todo from './Todo';

export const TodoDetails = (props) => {
  const displayTodo = () => {
    const { loading, todo } = props.data;
    if (loading) {
      return <h4>Loading...</h4>;
    } else {
      console.log(todo);
      return <Todo key={todo._id} todo={todo} />;
    }
  };
  return <React.Fragment>{displayTodo()}</React.Fragment>;
};

export default graphql(getTodoQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.match.params.id,
      },
    };
  },
})(TodoDetails);
