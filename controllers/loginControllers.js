const express = require('express')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.postLogin = async function(req,res) {   
    console.log(req.body)
    try {
       const user = await User.findOne({email: req.body.email})
       const token = jwt.sign( {id: user._id, role: user.role} , 'shhhhh')
       console.log(user)
       console.log(token)
       const decoded = jwt.verify(token, 'shhhhh');
       console.log(decoded)
       if (!user) return console.log('Pas d\'utilisateur correspondant')
       if (user.password === req.body.password) {
        res.send(decoded)
       }
       else return console.log('Pas d\'utilisateur correspondant')
    } catch (error) {
        throw error
    }
}

exports.showLogIn = async function (req,res) {
    try {
        res.render('login')
    } 
    catch (error) {
        throw error
    }
}