const express = require('express')
const User = require('../models/User')

exports.showUser = async function (req, res) {
    try {
        const anime = await User.findById(req.params.id)
        res.status(200).json(anime)
    } catch (error) {
        throw error
    }    
}