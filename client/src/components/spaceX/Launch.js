import React from 'react';
import { graphql } from 'react-apollo';
import { getLaunchQuery } from '../../queries/launchQueries';
import LaunchDetails from './LaunchDetails';

export const Launch = (props) => {
  const displayLaunch = () => {
    const { loading, launch } = props.data;
    if (loading) {
      return <h4>Loading...</h4>;
    } else {
      return <LaunchDetails {...launch} />;
    }
  };
  return <React.Fragment>{displayLaunch()}</React.Fragment>;
};

export default graphql(getLaunchQuery, {
  options: (props) => {
    const flight_number = parseInt(props.match.params.id);
    return {
      variables: {
        flight_number,
      },
    };
  },
})(Launch);
