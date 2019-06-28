const { createServer } = require('net');
const { parseHttpPacket } = require('./parseHttpPacket');

const app = createServer(sock => {
  sock.on('data', data => {
    sock.write(data);
    // invoke function to get the method and path

    // conditionally do things based on what the method is 

    // conditionally do things based on what the path is

  });
});

module.exports = {
  app
};

