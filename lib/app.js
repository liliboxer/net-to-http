const { createServer } = require('net');
const { parseHttpPacket } = require('./parseHttpPacket');
const { makeResponse } = require('../lib/makeResponse');

const app = createServer(sock => {
  sock.on('data', data => {
    const parsedData = parseHttpPacket(data);
    if(parsedData.method === 'GET' && parsedData.path === '/') {
      const res = makeResponse('200 OK', 'hi', 'text/plain');
      sock.write(res);
      sock.end();
    }
    // invoke function to get the method and path
    // conditionally do things based on what the method is 
    // conditionally do things based on what the path is


  });
});

module.exports = {
  app
};

