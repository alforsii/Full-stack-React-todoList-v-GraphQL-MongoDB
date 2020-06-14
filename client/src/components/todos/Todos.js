import React from 'react';
import graphql from 'graphql-tag';
import { Query } from 'react-apollo';

const TODOS_QUERY = graphql`
  query TodosQuery {
    todos {
      id
      title
      completed
    }
  }
`;
export default class Todos extends React.Component {
  render() {
    return (
      <div>
        <Query query={TODOS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              console.log('todos -> loading', loading);
              return <h4>Loading...</h4>;
            } else if (error) {
              console.log(error);
            }
            console.log(data);
            return <h2>Todos</h2>;
          }}
        </Query>
      </div>
    );
  }
}
