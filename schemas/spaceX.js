const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
} = require('graphql');

//Todo types schema
const LaunchType = new GraphQLObjectType({
  name: 'launch',
  fields: () => ({
    id: { type: GraphQLID },
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
  launch: {
    type: LaunchType,
    args: {
      flight_number: { type: GraphQLNonNull(GraphQLInt) },
    },
    resolve: (root, args, context, info) => {
      return axios
        .get(`https://api.spacexdata.com/v4/launches`)
        .then(
          (res) =>
            res.data.filter(
              (launch) => launch.flight_number == args.flight_number
            )[0]
        );
    },
  },
  latestLaunch: {
    type: LaunchType,
    resolve: () => {
      return axios
        .get('https://api.spacexdata.com/v4/launches/latest')
        .then((res) => res.data);
    },
  },
};

module.exports = { launchQueries };
