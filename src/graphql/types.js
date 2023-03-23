const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLInt, GraphQLFloat } = require('graphql')
const { User, Post} = require('../models')
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        post: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                return Post.find({
                    userId: parent.id
                })
            }
        }
    })
})
const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Posts',
    fields: () => ({
        id: { type: GraphQLID },
        userId:{type: GraphQLString},
        post: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId)
            }
        }
    })
})
module.exports = {
    UserType,
    PostType
}