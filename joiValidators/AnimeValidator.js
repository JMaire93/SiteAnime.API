const Joi = require('joi')
const typesAnimes = ['Shonen','Drama','Thriller','Seinen','Horreur','Romance']

module.exports = (req, res, next) =>{

    const seasonSchema = Joi.object({
        num: Joi.number()
                    .min(1)
                    .integer()
                    .positive()
                    .max(100)
                    .required(),
        episodes: Joi.number()
                    .min(1)
                    .integer()
                    .positive()
                    .max(5000)
                    .required(),
        episodeDuration : Joi.number()
                    .min(1)
                    .integer()
                    .positive()
                    .max(200)
                    .required(),
        cover: Joi.string()
                    .dataUri()
                    .trim()
    })

    const validatorUser = Joi.object({
        name: Joi.object({
            fr: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            en: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
        }),
        popularity: Joi.number()
                .integer()
                .min(1)
                .max(10000)
                .positive(),
        seasons: Joi.array()
                .min(1)
                .items(seasonSchema),
        finished: Joi.boolean(),
        trailer: Joi.string()
                .dataUri()
                .trim(),
        description: Joi.object({
            fr: Joi.string()
                .alphanum()
                .min(30)
                .max(800)
                .required(),
            en: Joi.string()
                .alphanum()
                .min(30)
                .max(800)
                .required()
        }),
        mainCover: Joi.string()
                .dataUri()
                .trim(),
        covers: Joi.array()
                .items(Joi.string().dataUri()),
        platforms: Joi.array(Joi.string()),
        startYear: Joi.number()
                .min(1950)
                .max(new Date.getFullYear())
                .integer()
                .positive(),
        types: Joi.array
                .items(Joi.string().valid(...typesAnimes))
    })

    const { error } = validatorAnime.validate(req.body);

    if (error) {
        console.log('Erreur Joi :', error.details)
        return  res.status(400).json({ error : error.details[0].message})
    }
    else {
        console.log('validation OK')
        next()
    }
    
}