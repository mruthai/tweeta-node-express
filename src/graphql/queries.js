const { User, Post } = require('../models')
const { UserType, PostType } = require('./types')
const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')


const users = {
    type: new GraphQLList(UserType),
    description: 'Query all users from the database',
    resolve(parent, args) {
        return User.find().sort({ username: 'asc'})
    }

}

const user ={
    type: UserType,
    description: 'Query a user by userID',
    args: {
         id: { type: GraphQLID }
    },
    resolve(parent, args) {
        return User.findById(args.id)
    }
}


const post = {
    type: PostType,
    description: 'Query a post by slug',
    args: {
        id: { type: GraphQLString }
    },
    resolve(parent, args) {
        return Post.findOne( args.id )
    }
}



module.exports = {
    users,
    user,
    post
    
}