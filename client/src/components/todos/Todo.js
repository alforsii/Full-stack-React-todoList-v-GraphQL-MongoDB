import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import UpdateTodo from './UpdateTodo';
import { removeTodoMutation, getTodosQuery } from '../../queries/Queries';

export const Todo = ({ todo }) => {
  const { _id, title, completed, removeTodoMutation } = todo;
  return (
    <ul className="col-md-4 pt-2 ">
      <blockquote className="blockquote">
        <li className="list-group-item">ID: {_id} </li>
        <li className="list-group-item blockquote-footer">
          <Link to={`/todo/${_id}`}>
            Title:{' '}
            <span
              className={classnames({
                'text-muted line-through': completed,
                'text-muted': !completed,
              })}
            >
              {title}
            </span>
          </Link>
        </li>
        <li className="list-group-item">
          Completed:{' '}
          <span
            className={classnames({
              'text-success': completed,
              'text-danger': !completed,
            })}
          >
            {completed ? 'Yes' : 'No'}
          </span>{' '}
        </li>
      </blockquote>
      <div className="d-flex align-items-center">
        <button
          onClick={() =>
            removeTodoMutation({
              variables: {
                id: _id,
              },
              refetchQueries: [{ query: getTodosQuery }],
            })
          }
          className="btn btn-danger m-2"
        >
          Remove
        </button>
        <UpdateTodo todo={todo} />
      </div>
    </ul>
  );
};

export default graphql(removeTodoMutation, { name: 'removeTodoMutation' })(
  Todo
);
