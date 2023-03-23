const TweetaRouter = require('express').Router()

TweetaRouter.route('/create')
    .get(require('./create.view'))
    .post(require('./create'))

   
module.exports = TweetaRouter
