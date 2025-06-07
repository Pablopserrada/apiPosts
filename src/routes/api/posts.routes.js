const router = require('express').Router();

const postController = require('../../controllers/posts.controller');

router.get('/', postController.getAll);

module.exports = router;