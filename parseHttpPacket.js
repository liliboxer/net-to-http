const { app } = require('./index');

console.log(app);

// const data = app.data.toString();

function parseHttpPacket(data) {
  console.log(data.toString());
  // const lines = data.toString().split('\n');
  // const method = lines[0].split(' ')[0];
  // const path = lines[1].split(' ')[0];
  // console.log(method);
  // console.log(path);
  return { data };
}


module.exports = { parseHttpPacket };
