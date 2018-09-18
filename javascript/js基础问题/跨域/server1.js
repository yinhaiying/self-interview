const http = require('http');

http.createServer(function(request,response){

   response.writeHead(200,{
     //允许任何服务器进行请求
     'Access-Control-Allow-Origin':"*",
     //只允许指定服务器进行请求
     "Access-Control-Allow-Origin":'127.0.0.1:8088'
   })
  response.end('123')

}).listen(8888)
