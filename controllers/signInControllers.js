const express = require('express')
const User = require('../models/User')

exports.postSignIn = async function(req,res) {   
    // création d'une instance de User dans la collection Users
    req.body.avatarImg = 'http://localhost:3000/' + req.file.filename
    try {
       let newUser = new User(req.body)
       let savedUser = await newUser.save()
       res.end()
    } catch (error) {
        throw error
    }
}
