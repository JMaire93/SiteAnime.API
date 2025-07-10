const express = require('express')
const Anime = require('../models/Anime')

exports.getAdd = async function (req,res) {
    try {
        res.render('form')
    } 
    catch (error) {
        throw error
    }
}

exports.postAdd = async function(req,res) {    
    if (req.body.finished === 'on') {req.body.finished = true}
    else {req.body.finished = false}
    req.body.covers = req.body.images.split(" ")
    try {
       let newAnime = new Anime(req.body)
       let savedAnime = await newAnime.save()
       res.redirect('/animes')
    } catch (error) {
        throw error
    }
}

exports.show = async function(req,res) {
    try {
    const animes = await Anime.find()
    res.json(animes)
    }
    catch(err) {
        console.log(err)
    }
}
