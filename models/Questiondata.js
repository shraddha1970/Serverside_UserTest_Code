'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = mongoose.Schema({
  series:Object   
});


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test',{ useNewUrlParser: true });

module.exports = mongoose.model('usertest', testSchema);