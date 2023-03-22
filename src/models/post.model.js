const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: true,
            unique: true
        },
        post: {
            type: String,
            required: true
        },
       
        userId: {
            type: String,
            unique: true,
            required: true
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('post', postSchema)