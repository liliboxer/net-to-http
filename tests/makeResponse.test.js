const { request } = require('supertest');
const { makeResponse } = require('../lib/makeResponse');
const { app } = require('../lib/app');

describe('makes response', () => {
  it('path / with GET returns hi', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });
});
