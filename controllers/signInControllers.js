const express = require('express')
const User = require('../models/User')

exports.postSignIn = async function(req,res) {   
    // création d'une instance de User dans la collection Users
    try {
       let newUser = new User(req.body)
       let savedUser = await newUser.save()
       res.end()
    } catch (error) {
        throw error
    }
}

exports.coucou = async function (req,res) {
    res.send('<h1>Coucou</h1>')
}
