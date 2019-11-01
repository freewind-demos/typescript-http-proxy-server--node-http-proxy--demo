const httpProxy = require('http-proxy');

httpProxy.createProxyServer({
  target: 'http://localhost:43762'
}).listen(28378);

console.log('visit http://localhost:28378');
