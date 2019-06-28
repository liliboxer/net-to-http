const { makeResponse } = require('../lib/makeResponse');

describe('makes response', () => {
  it('returns response as string', () => {
    const response = makeResponse('200 OK', 'hi', 'plain');
    expect(response).toEqual(`HTTP/1.1 200 OK
Date: ${new Date().toISOString()}
Server: Apache
Accept-Ranges: bytes
Content-Length: Buffer.from2
Content-Type: text/plain

hi
  `);

  // given status and content, getitng the type yet 
  });
});
