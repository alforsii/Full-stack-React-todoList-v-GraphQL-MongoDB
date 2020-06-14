import React from 'react';
import graphql from 'graphql-tag';
import { Query } from 'react-apollo';

import Todo from './Todo';

const TODOS_QUERY = graphql`
  query TodosQuery {
    todos {
      _id
      id
      title
      completed
    }
  }
`;

export default class Todos extends React.Component {
  render() {
    return (
      <div className="bg-dark">
        <Query query={TODOS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              return <h4>Loading...</h4>;
            } else if (error) {
              console.log(error);
              return;
            }
            console.log(data);
            return (
              <div className="list-group">
                {data?.todos.map((todo) => (
                  <Todo key={todo._id} {...todo} />
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
