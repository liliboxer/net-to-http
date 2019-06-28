const { createServer } = require('net');
const { parseHttpPacket } = require('../utils/parseHttpPacket');
const { makeResponse } = require('../utils/makeResponse');
const { red, green, blue } = require('../utils/color-utils');
const { notFound } = require('../utils/not-found');

const dog = {
  name: 'spot',
  age: '5000',
  weight: '2000lbs'
};


const app = createServer(sock => {
  sock.on('data', data => {
    const parsedData = parseHttpPacket(data);
    if(parsedData.method === 'GET' && parsedData.path === '/') {
      const res = makeResponse('200 OK', 'hi', 'text/plain');
      sock.write(res);
      sock.end();
    } else if(parsedData.method === 'POST' && (parsedData.path === '/')) {
      const res = makeResponse('400 BAD REQUEST', 'sorry', 'text/plain');
      sock.write(res);
      sock.end();
    } else if(parsedData.method === 'GET' && (parsedData.path === '/red')){
      const res = makeResponse('200 OK', red, 'text/html');
      sock.write(res);
      sock.end();
    } else if(parsedData.method === 'GET' && (parsedData.path === '/green')){
      const res = makeResponse('200 OK', green, 'text/html');
      sock.write(res);
      sock.end();
    } else if(parsedData.method === 'GET' && (parsedData.path === '/blue')){
      const res = makeResponse('200 OK', blue, 'text/html');
      sock.write(res);
      sock.end();
    } else if(parsedData.method === 'GET' && (parsedData.path === '/dog')){
      const res = makeResponse('200 OK', JSON.stringify(dog), 'application/json');
      sock.write(res);
      sock.end();
    } else {
      const res = makeResponse('404 NOT FOUND', notFound, 'text/html');
      sock.write(res);
      sock.end();
    }
  });
});

module.exports = {
  app
};

