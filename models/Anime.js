const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.ObjectId, auto: true},
    name: {
        fr: {type: String, required: [true,`il faut un nom d'animé!`], unique: [true, 'Animé déjà existant dans la data base !']},
        en: {type: String, required: [true,`il faut un nom d'animé!`], unique: [true, 'Animé déjà existant dans la data base !']}
        },
    popularity: Number,
    seasons: [{
            num: {type: Number, required: true},
            episodes: {type: Number, required: true},
            episodeDuration: Number,
            cover: String
             }],
    finished: Boolean,
    trailer: String,
    description: {
        fr: {type: String, required: true, maxlength: [1000, 'description trop longue !'], minlength: [50, 'description trop courte !']},
        en: {type: String, required: true, maxlength: [1000, 'description trop longue !'], minlength: [50, 'description trop courte !']}
    },
    mainCover: {type: String, required: true},
    covers: [String],
    plateforms: [String],
    startYear: Number,
    type: {type: String, required: true},
    birthdate: {type: Date, validate: {
        validator : function(date) {
            const dateTime = new Date(date).getTime()
            return dateTime < Date.now()
        }, 
        message: 'Cette date n\'existe pas encore !'
    }}
})

const anime = mongoose.model('Anime', animeSchema)

module.exports = anime
