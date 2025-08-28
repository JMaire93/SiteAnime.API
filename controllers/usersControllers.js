const express = require('express')
const User = require('../models/User')

exports.showUser = async function (req, res) {
    try {
        const user = await User.findById(req.params.id)
        .populate('animes.anime',{
            _id: 0,
            trailer: 0,
            description: 0,
            mainCover: 0,
            startYear: 0
        })
        res.status(200).json(user)
    } catch (error) {
        throw error
    }    
}

exports.updateUser = async function (req, res) {
    const prop = req.params.prop
    const newName = req.body.name
    try {
        const user = await User.findOneAndUpdate({_id: req.params.id}, 
                                                 {$set: {[prop]: newName}},
                                                 {new: true}
        )
        console.log(user)
        res.status(200).json(user)
    } catch (error) {
        throw error
    }
    
}