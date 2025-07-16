const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
SALT_WORK_FACTOR = 10

const userSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.ObjectId, auto: true},
    name: {type: String, unique: [true, 'Cet identifiant existe déjà !'], required: [true, 'un identifiant est nécessaire']},
    email: {type: String, unique: [true, 'Un compte utilisant cette adresse mail existe déjà !'], required: [true, 'une adresse mail est nécessaire !'], match:[/^\S+@\S+\.\S+$/, 'format d\'adresse mail non valide !']},
    password: String,
    birthdate: {type: Date, validate: [date => {
        return date <= Date.now()
    }, 'Veuillez utiliser une date de naissance valide !']},
    // role: {type: String, enum: {values: ['', 'admin'], message: 'Le rôle renseigné n\'est pas valide', default: 'admin'}
    role: String
})

// userSchema.pre('save', async function(next) {
//     if (this.isModified('password')) {
//         const hashedPassword = await bcrypt.hash(this.password, 10)
//         this.password = hashedPassword
//     }
//     next()
// })

const user = mongoose.model('User', userSchema)

module.exports = user