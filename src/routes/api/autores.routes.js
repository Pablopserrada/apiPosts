const router = require('express').Router();


const { getAll, getById, create } = require('../../controllers/autores.controller')

router.get('/', getAll);
router.get('/:autorId', getById)

router.post('/', create);

module.exports = router;