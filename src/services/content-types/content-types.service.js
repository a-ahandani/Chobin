// Initializes the `content-types` service on path `/content-types`
const createService = require('feathers-mongoose');
const createModel = require('../../models/content-types.model');
const hooks = require('./content-types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/content-types', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('content-types');

  service.hooks(hooks);
};
