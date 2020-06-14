import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export default function Todo({ _id, id, title, completed }) {
  return (
    <React.Fragment>
      <ul>
        <li className="list-group-item">ID: {id} </li>
        <li className="list-group-item">
          <Link
            to={{
              pathname: `/todo/${_id}`,
              state: { id, title, completed },
            }}
          >
            Title: {title}
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
      </ul>
    </React.Fragment>
  );
}
