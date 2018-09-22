const assert = require('assert');
const app = require('../../src/app');

describe('\'content-types\' service', () => {
  it('registered the service', () => {
    const service = app.service('content-types');

    assert.ok(service, 'Registered the service');
  });
});
