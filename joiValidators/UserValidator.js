const Joi = require('joi')

    const animeSchema = Joi.object({
        anime: Joi.string().required(),
        priority: Joi.string().required(),
        actualEpisode : Joi.string().required(),
        HS: Joi.boolean().required()
    })

    module.exports = Joi.object({
        name: Joi.string()
                .alphanum()
                .min(3)
                .max(20)
                .required(),
        email: Joi.string()
                .pattern(new RegExp('^[\\w.-]+@([\\w-]+\\.)+[\\w-]{2,4}$')),
        password: Joi.string()
                .pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$')),
        animes: Joi.array().items(animeSchema),
        role: Joi.string(),
        avatarImg: Joi.any()
    })

    
