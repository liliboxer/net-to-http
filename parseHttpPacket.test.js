const { parseHttpPacket } = require('./parseHttpPacket');

describe('http', () => {
  it('returns method', () => {
    const str = 'GET / HTTP/1.1';
    const { method, path } = parseHttpPacket(str);
    expect(method).toEqual('GET');
    expect(path).toEqual('/');
  });
});
