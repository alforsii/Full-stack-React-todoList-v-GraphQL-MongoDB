import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { getLaunchesQuery } from '../../queries/launchQueries';
import LaunchItem from './LaunchItem';

export const Launches = (props) => {
  const displayLaunches = () => {
    const { loading, launches } = props.data;
    if (loading) {
      return <h4>Loading...</h4>;
    } else {
      return (
        <div>
          <Link to="/launches/latest">See Latest Launch</Link>
          {launches?.map((launch) => (
            <LaunchItem key={launch.id} {...launch} />
          ))}
        </div>
      );
    }
  };
  return <div>{displayLaunches()}</div>;
};

export default graphql(getLaunchesQuery)(Launches);
