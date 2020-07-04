const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
  // GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
} = require('graphql');

//Todo types schema
const LaunchType = new GraphQLObjectType({
  name: 'launch',
  fields: () => ({
    id: { type: GraphQLID },
    links: { type: GraphQLString },
    success: { type: GraphQLBoolean },
    flight_number: { type: GraphQLInt },
    rocket: { type: GraphQLString },
    date_local: { type: GraphQLString },
    details: { type: GraphQLString },
  }),
});

const launchQueries = {
  //get all photos from mongoDB photos collections
  launches: {
    type: new GraphQLList(LaunchType),
    resolve: () => {
      return axios.get('https://api.spacexdata.com/v4/launches').then((res) => {
        // console.log(res.data);
        return res.data;
      });
    },
  },
  latestLaunch: {
    type: LaunchType,
    resolve: () => {
      return axios
        .get('https://api.spacexdata.com/v4/launches/latest')
        .then((res) => {
          // console.log(res.data);
          return res.data;
        });
    },
  },
};

module.exports = { launchQueries };
