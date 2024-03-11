const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLSchema } = require('graphql');

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        task: {
            type: TaskType,
            args: { id: { type: GraphQLID} },
            resolve(parent,args){
                //return null;
            }
        }
    }
});

module.exports = new GraphQLSchema({ query: RootQuery });