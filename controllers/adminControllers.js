const express = require('express')

exports.showAdmin = async function (req, res) {
    try {
        res.send('coucou')
    } catch (error) {
        throw error
    }    
}