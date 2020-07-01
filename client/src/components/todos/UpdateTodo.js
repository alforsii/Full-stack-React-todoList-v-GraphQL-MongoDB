import React, { useState } from 'react';
import { Modal } from 'antd';

import { graphql } from 'react-apollo';

import { updateTodoMutation, getTodosQuery } from '../../queries/Queries';

export const UpdateTodo = ({
  updateTodoMutation,
  todo: { _id, title, completed },
}) => {
  const [state, setState] = useState({
    visible: false,
    confirmLoading: false,
  });
  const [todo, setTodo] = useState({
    title: title,
    completed: completed,
  });
  const { visible, confirmLoading } = state;

  const handleSubmit = () => {
    setState({
      ...state,
      confirmLoading: true,
    });
    console.log(todo);
    updateTodoMutation({
      variables: {
        id: _id,
        title: todo.title,
        completed: todo.completed,
      },
      refetchQueries: [{ query: getTodosQuery }],
    });
    handleClose();
  };

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const handleCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };
  const handleClose = () => {
    setState({
      ...state,
      visible: false,
      confirmLoading: false,
    });
  };

  return (
    <>
      <button className="btn blue" onClick={showModal}>
        Update
      </button>
      <Modal
        title="Update todo"
        visible={visible}
        onOk={handleSubmit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              type="text"
              id="title"
              value={todo.title}
              className="form-control"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="completed"
              checked={todo.completed}
              onChange={(e) =>
                setTodo({ ...todo, completed: e.target.checked })
              }
            />
            <label className="form-check-label" htmlFor="completed">
              Completed
            </label>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default graphql(updateTodoMutation, { name: 'updateTodoMutation' })(
  UpdateTodo
);
