import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import UpdateTodo from './UpdateTodo';
import { removeTodoMutation, getTodosQuery } from '../../queries/Queries';

export const Todo = ({ todo, removeTodoMutation }) => {
  const { _id, title, completed } = todo;
  return (
    <div className="col s12 m6">
      <div className="card-panel hoverable">
        <ul>
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
          <div className="divider"></div>
          <button
            onClick={() =>
              removeTodoMutation({
                variables: {
                  id: _id,
                },
                refetchQueries: [{ query: getTodosQuery }],
              })
            }
            className="btn red m4"
          >
            Remove
          </button>
          <UpdateTodo todo={todo} />
        </ul>
      </div>
    </div>
  );
};

export default graphql(removeTodoMutation, { name: 'removeTodoMutation' })(
  Todo
);
