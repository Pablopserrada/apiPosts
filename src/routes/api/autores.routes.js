const router = require('express').Router();


const { getAll, getById } = require('../../controllers/autores.controller')

router.get('/', getAll);
router.get('/:autorId', getById)

module.exports = router;