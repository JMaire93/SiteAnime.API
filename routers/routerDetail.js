const express = require('express')
const router = express.Router()
const controller = require('../controllers/detailController')

router.get('/:id', controller.showDetail)

module.exports = router