const request = require('supertest');
const { app } = require('../lib/app');

describe('parse request and send from server', () => {
  it('able to parse request', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('hi'));
      });
  });
});
