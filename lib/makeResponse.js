function makeResponse(status, data, contentType) {
  const date = new Date();
  return `HTTP/1.1 ${status}
Date: ${date}
Server: Apache
Accept-Ranges: bytes
Content-Length: Buffer.from${data.length}
Content-Type: text/${contentType}

${data}
  `;

  // make an http response packet
  // giving a status (202, 303) and content (htl, plain, json)
  // response packet sifferent from request packet 
  // return string 

}

module.exports = { makeResponse };
