import React from 'react';
import { graphql } from 'react-apollo';
import { getLatestLaunchQuery } from '../../queries/launchQueries';
import LaunchDetails from './LaunchDetails';

export const LatestLaunch = (props) => {
  const displayLaunch = () => {
    const { loading, latestLaunch } = props.data;

    if (loading) {
      return <h4>Loading...</h4>;
    } else {
      return <LaunchDetails {...latestLaunch} />;
    }
  };
  return <React.Fragment>{displayLaunch()}</React.Fragment>;
};

export default graphql(getLatestLaunchQuery)(LatestLaunch);
