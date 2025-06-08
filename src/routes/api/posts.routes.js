const router = require('express').Router();

const postController = require('../../controllers/posts.controller');

router.get('/', postController.getAll);
router.get('/:postId', postController.getById)
router.get('/autor/:autorId', postController.getByAutor)

module.exports = router;