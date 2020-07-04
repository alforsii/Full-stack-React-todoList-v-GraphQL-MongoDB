import { gql } from 'apollo-boost';

export const getLaunchesQuery = gql`
  query {
    launches {
      id
      success
      flight_number
      rocket
      date_local
      details
    }
  }
`;

export const getLaunchQuery = gql`
  query($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      id
      success
      flight_number
      rocket
      date_local
      details
    }
  }
`;

export const getLatestLaunchQuery = gql`
  query {
    latestLaunch {
      id
      success
      flight_number
      rocket
      date_local
      details
    }
  }
`;
