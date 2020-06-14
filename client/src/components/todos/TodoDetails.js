import React from 'react';
import graphql from 'graphql-tag';
import { Query } from 'react-apollo';
import classnames from 'classnames';

const TODO_QUERY = graphql`
  query Todos($id: String!) {
    todo(id: $id) {
      id
      title
      completed
    }
  }
`;

export default function Todo(props) {
  let { id } = props.match.params;
  return (
    <React.Fragment>
      <Query query={TODO_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <h4>Loading...</h4>;
          } else if (error) {
            return console.log(error);
          } else {
            const { id, title, completed } = data.todo;
            return (
              <ul>
                <li className="list-group-item">ID: {id} </li>
                <li className="list-group-item">Title: {title}</li>
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
            );
          }
        }}
      </Query>
    </React.Fragment>
  );
}
