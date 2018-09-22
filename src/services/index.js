const contents = require('./contents/contents.service.js');
const users = require('./users/users.service.js');
const contentTypes = require('./content-types/content-types.service.js');
const comments = require('./comments/comments.service.js');
const roles = require('./roles/roles.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(contents);
  app.configure(users);
  app.configure(contentTypes);
  app.configure(comments);
  app.configure(roles);
};
