import React from 'react';
import { graphql } from 'react-apollo';
import { getTodoQuery } from '../../queries/Queries';
import Todo from './Todo';

export const TodoDetails = (props) => {
  const displayTodo = () => {
    const { loading, todo } = props.data;
    if (loading) {
      return <h4>Loading...</h4>;
    } else {
      return <Todo key={todo._id} {...todo} />;
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
