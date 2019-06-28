# net-to-http

## code ideas

* trying to make TCP act like HTTP

* const lines = data.toString().split(\n);
* const method = lines[0].split(' ')[0];
* const path = lines[0].split(' ')[0]

* function for makeHTTPPacket = data => { returns a packet of http }

3 things we are testing: 

1 - that you can parse the request
2 - function that will make a response
3 - return request app > use the stuff the two previous functions are outputting and making sure they match. request get, return corresponding message 