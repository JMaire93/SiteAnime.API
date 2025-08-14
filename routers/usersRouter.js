const express = require('express')
const router = express.Router()
const controller = require('../controllers/usersControllers')

router.get("/:id", controller.showUser)
router.patch("/id/:id/prop/:prop", controller.updateUser)

module.exports = router