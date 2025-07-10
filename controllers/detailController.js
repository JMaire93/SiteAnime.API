const express = require('express')
const Anime = require('../models/Anime')

exports.showDetail = async function (req, res) {
    try {
        const anime = await Anime.findById(req.params.id)
        res.status(200).json(anime)
    } catch (error) {
        throw error
    }    
}