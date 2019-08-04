// console.log('hello world, and welcome to my server-side adventure!');

// helloFromFunction = () => {
//   setTimeout(function(){
//     console.log('hello from a function');
//   }, 1000)
// }
//
// helloFromFunction();
// console.log('hello after function');

const http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-type': 'text/plain'}); // '200' is a 'request okay' response
  res.end('hello world, and welcome to my server-side adventure!');
  console.log('this server is running on port 3000');
}).listen(3000); // this is a port number - 'which port number are we listening at? listen to it pls'
