const { createServer } = require('net');

const app = createServer(sock => {
  sock.on('data', data => {
    sock.write(data);
    console.log(data);
  });
});

module.exports = {
  app
};

