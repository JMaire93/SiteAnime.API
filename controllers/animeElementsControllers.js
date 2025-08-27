const express = require('express')
const User = require('../models/User.js')

exports.addAnimeElement = async function(req,res) {   
    // création d'une instance d'élément de watchlist dans la collection Users
    try {
        const user = await User.findById( req.params.id)
        
        if (user.animes.some(ani => ani.anime.toString() === req.body.anime.toString())) {
            console.log('anime déjà existant')
            return res.status(400).json({message: 'anime déjà existant'})
        }
        const userModified = await User.findOneAndUpdate({_id: req.params.id}, 
                                                 {$push: {animes: req.body}},
                                                 {new: true}
        ) 
            res.status(200).json({id: userModified.id, role: userModified.role, animes: userModified.animes.map((ani=>ani.anime))})
    } catch (error) {
        throw error
    }
    // try {
    //     const user = await User.findOneAndUpdate({_id: req.params.id}, 
    //                                              {$push: {animes: req.body}},
    //                                              {new: true}
    //     )
    //     console.log(user)
    //     res.status(200).json(user)
    // } catch (error) {
    //     throw error
    // }
}