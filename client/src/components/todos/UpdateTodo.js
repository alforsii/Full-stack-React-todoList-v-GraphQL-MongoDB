import React, { useState } from 'react';
import { Modal } from 'antd';
import { graphql } from 'react-apollo';
import { updateTodoMutation, getTodosQuery } from '../../queries/todoQueries';

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
          <div className="row">
            <div className="input-field s12">
              <label htmlFor="title">Title</label>
              <input
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                type="text"
                id="title"
                value={todo.title}
                className="validate"
                autoFocus={true}
              />
            </div>
            <div className="input-field s12">
              <label>
                <input
                  id="completed"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => {
                    // console.log(e.target.checked);
                    setTodo({ ...todo, completed: e.target.checked });
                  }}
                />
                <span>Completed</span>
              </label>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default graphql(updateTodoMutation, { name: 'updateTodoMutation' })(
  UpdateTodo
);
