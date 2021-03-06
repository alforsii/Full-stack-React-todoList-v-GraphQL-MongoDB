import React from 'react';
import { graphql } from 'react-apollo';
import { getTodosQuery } from '../../queries/todoQueries';

import Todo from './Todo';
import AddTodo from './AddTodo';

export const Todos = (props) => {
  const displayTodos = () => {
    const { loading, todos } = props.data;
    if (loading) {
      return <h4>Loading...</h4>;
    } else {
      return todos?.map((todo) => <Todo key={todo._id} todo={todo} />);
    }
  };

  return (
    <>
      <AddTodo />
      <br />
      <div className="row">{displayTodos()}</div>
    </>
  );
};

export default graphql(getTodosQuery)(Todos);
