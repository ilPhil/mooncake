
const commentsController = require('./controllers/comments.js');
const userController = require('./controllers/users.js');
const router = require('express').Router();

router
  .get('/comments/:urlContent',commentsController._get)
  .get('/comments',commentsController._getAll)
  .post('/comments',commentsController._post)

router.route('/user')
  .get(userController._get)
  .post(userController._post)

module.exports = router
