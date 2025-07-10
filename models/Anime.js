const mongoose = require('mongoose')
const opts = { toJSON: { virtuals: true } }
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
        fr: {type: String, required: true, },
        en: {type: String, required: true, },
    },
    mainCover: {type: String, required: true},
    covers: [String],
    plateforms: [String],
    startYear: Number,
    types: [{type: String, required: true}]
}, opts)

animeSchema.virtual('episodesTotal').get(function() {
        let episode = 0
            this.seasons.forEach(season => {
                episode += season.episodes
            })
    return episode
    })

const anime = mongoose.model('Anime', animeSchema)

module.exports = anime
