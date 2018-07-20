'use strict';

var bcSdk = require('../query');

exports.getscore = (key) => {
   return new Promise((resolve, reject) => {
       
       bcSdk.getscore({
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