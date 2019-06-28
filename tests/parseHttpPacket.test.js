const { parseHttpPacket } = require('../lib/parseHttpPacket');

describe('http', () => {
  it('returns method and path', () => {
    const str = 'GET / HTTP/1.1';
    const { method, path } = parseHttpPacket(str);
    expect(method).toEqual('GET');
    expect(path).toEqual('/');
  });
});
