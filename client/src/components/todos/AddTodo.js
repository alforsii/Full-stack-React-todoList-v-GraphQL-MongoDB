import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { addTodoMutation, getTodosQuery } from '../../queries/todoQueries';

export const AddTodo = (props) => {
  const [todo, setTodo] = useState({
    title: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    if (!todo.title) {
      return setTodo({ ...todo, message: 'Please enter title!' });
    }
    props.addTodoMutation({
      variables: {
        title: todo.title,
      },
      refetchQueries: [{ query: getTodosQuery }],
    });
    setTodo({ title: '' });
  };
  return (
    <form onSubmit={handleSubmit} className="m-auto" style={{ width: '300px' }}>
      <p className="red-text">{todo.message && todo.message}</p>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => setTodo({ title: e.target.value })}
          type="text"
          id="title"
          value={todo.title}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn">
        Add Todo
      </button>
    </form>
  );
};

export default graphql(addTodoMutation, { name: 'addTodoMutation' })(AddTodo);
