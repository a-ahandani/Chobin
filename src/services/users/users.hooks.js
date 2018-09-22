const { authenticate } = require("@feathersjs/authentication").hooks;

const {
  hashPassword,
  protect
} = require("@feathersjs/authentication-local").hooks;

const populateUser = require('../../hooks/populate-user');

module.exports = {
  before: {
    all: [],
    find: [populateUser()],
    get: [authenticate("jwt"), populateUser()],
    create: [hashPassword()],
    update: [hashPassword(), authenticate("jwt")],
    patch: [hashPassword(), authenticate("jwt")],
    remove: [authenticate("jwt")]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password")
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
