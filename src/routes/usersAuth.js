const userAuthRouter = require('express').Router();
const { createUser, loginUser } = require('../controllers/users');

userAuthRouter.post('/signup', createUser);
userAuthRouter.post('/signin', loginUser);

module.exports = userAuthRouter;
