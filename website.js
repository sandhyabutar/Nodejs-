const {Console} = require('console');
const http = require('http');

const port = process.env.PORT || 3000  ;

const server = http.createServer((req, res)=>{
   
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    console.log(req.url)
    if(req.url == '/'){
    res.end('<h1>This is Code With Butar girl</h1><p>Hey this is the way to rock the world!</p>');
    }
    else if(req.url == '/about'){
      res.end('<h1>About Code With Sandhya</h1><p>Hey this is the way to rock the world!</p>');
    }
})
server.listen(port, ()=>{
console.log('Server is listing on port ${port}')
});
