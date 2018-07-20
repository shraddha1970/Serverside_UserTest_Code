'use strict';

const Questiondata = require('../models/Questiondata');

exports.addQuestion = (series) =>{

  return  new Promise((resolve, reject) => {

       const newData = new Questiondata({
           series:series
       });
       newData.save()

       .then(() => resolve({
           status: 201,
           message: 'Added question and options'
       }))

       .catch(err => {
       console.log("err",err)
       });
   })};