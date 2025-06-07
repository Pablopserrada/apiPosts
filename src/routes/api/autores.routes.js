const router = require('express').Router();

const autoresController = require('../../controllers/autores.controller');

router.get('/', autoresController.getAll);

module.exports = router;