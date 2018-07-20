'use strict';

var bcSdk = require('../invoke');

exports.saveScore = (score,key) => {
   return new Promise((resolve, reject) => {

       bcSdk.saveScore({
           Score: score,
           Key: key
       })

       .then((responseout) => {
           return resolve({
               status: 200,
               query: responseout
           })
       })

       .catch(err => {
             console.log("err",err)
       })
   })
};