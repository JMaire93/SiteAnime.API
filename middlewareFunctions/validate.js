module.exports = function validator(JOImodel) {

    return function (req, res, next) {
    const { value, error } = JOImodel.validate(req.body);

    if (error) {
        console.log('Erreur Joi :', error.details)
        return  res.status(400).json({ error : error.details[0].message})
    }
    else {
        console.log('validation OK')
        next()
    }
    }

}
