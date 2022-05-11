var http = require('http');
http.createServer(function(req,res){
    console.log('Recieving Request');
    res.writeHead(200,{'content-Type':'text/plain'});
    res.write('Hello World/n');
    res.end();
}).listen(4200,'localhost');
 console.log('server running at http://localhost:4200/');