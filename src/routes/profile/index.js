const ProfileRouter = require('express').Router()

ProfileRouter.route('/profile')
    .get(require('./profile.view'))   
   
ProfileRouter.route('/user')
    .get(require('./user.view'))   
   
module.exports = ProfileRouter