const express = require('express')
const router = express.Router()
const controller = require('../controllers/adminControllers')

function isAdmin(req, res , next) {
    console.log(req.session)
    if (req.session.user.role === 'admin') next()
    else res.redirect('/login') 
}
router.get("/", isAdmin, controller.showAdmin)

module.exports = router