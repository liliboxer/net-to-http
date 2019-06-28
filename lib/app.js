const { createServer } = require('net');
const { parseHttpPacket } = require('./parseHttpPacket');
const { makeResponse } = require('../lib/makeResponse');

const app = createServer(sock => {
  sock.on('data', data => {
    sock.write(data);
    const request = parseHttpPacket(data);
    console.log(request);
    // invoke function to get the method and path
    // conditionally do things based on what the method is 
    // conditionally do things based on what the path is


  });
});

module.exports = {
  app
};

