const { createServer } = require('net');
const { parseHttpPacket } = require('../utils/parseHttpPacket');
const { makeResponse } = require('../utils/makeResponse');

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
    }
    // invoke function to get the method and path
    // conditionally do things based on what the method is 
    // conditionally do things based on what the path is


  });
});

module.exports = {
  app
};

