const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

module.exports = function (app) {
  mongoose.connect(app.get('mongodb'), { useNewUrlParser: true });
  mongoose.Promise = global.Promise;
  mongoose.plugin(uniqueValidator);

  app.set('mongooseClient', mongoose);
};
