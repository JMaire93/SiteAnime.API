const express = require('express')
const User = require('../models/User.js')

exports.addAnimeElement = async function(req,res) {   
    // création d'une instance d'élément de watchlist dans la collection Users
    try {
        const user = await User.findOneAndUpdate({_id: req.params.id}, 
                                                 {$push: {animes: req.body}},
                                                 {new: true}
        )
        console.log(user)
        res.status(200).json(user)
    } catch (error) {
        throw error
    }
}