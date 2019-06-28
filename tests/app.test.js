const request = require('supertest');
const { app } = require('../lib/app');
const { red, green, blue } = require('../utils/color-utils');

describe('parse request and send from server', () => {
  it('able to parse request', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('hi'));
      });
  });

  it('POST gets 400 ', () => {
    return request(app)
      .post('/')
      .then(res => {
        expect(res.status).toEqual(400);
        expect(res.text).toEqual(expect.stringContaining('sorry'));
      });
  });

  it('/red returns red', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(red);
      });
  });

  it('/green returns green', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(green);
      });
  });

  it('/blue returns blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(blue);
      });
  });
});
