'use strict';
const users = require('../models/users');
var MongoClient = require('mongodb').MongoClient;

exports.getQuestion = () => {
    return new Promise((resolve, reject) => {

        users.find().then((users) => {

            resolve({status: 201, usr: users})

        })
            .catch(err => {
               console.log("err",err)
            })
    })
};