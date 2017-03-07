import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID
} from 'graphql';

import {
  getUser
} from './database';

const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: {
      type: GraphQLString,
      resolve: ({ _id }) => _id,
    }
  })
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: userType,
      args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, { _id }) => getUser(_id),
    }
  })
});

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createUser: {
      type: userType,
      args: {
      user: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, { todo }) => createTodo(todo),
    }
  })
});

export default new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});
