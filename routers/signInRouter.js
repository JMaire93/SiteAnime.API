const express = require('express')
const router = express.Router()
const controller = require('../controllers/signInControllers')
const UserJOI = require('../joiValidators/UserValidator')
const validate = require('../middlewareFunctions/validate')
const multer = require('multer')
const opts = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + req.body.name +  '-' + uniqueSuffix + '-' + file.originalname)
    console.log(file)
  }
})
const upload = multer({ storage: opts})

router.post("/", upload.single('avatar'), validate(UserJOI), controller.postSignIn)

module.exports = router
