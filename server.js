const { createServer } = require('net');

const server = createServer(sock => {
  console.log('server is connected');
  sock.on('data', data => {
    console.log(data.toString());
    sock.write(data);
  });
});

server.listen(6969);
