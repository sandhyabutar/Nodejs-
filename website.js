const {Console} = require('console');
const http = require('http');
const fs =require('fs');

const port = process.env.PORT || 3000  ;

const server = http.createServer((req, res)=>{
   
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    console.log(req.url)
    if(req.url == '/'){
    res.end('<h1>This is Code With Butar girl</h1><p>Hey this is the way to rock the world!</p>');
    }
    else if(req.url == '/register'){
      res.end('<h1>Register Code With Sandhya</h1><p>Hey this is the way to rock the world!</p>');
    }
    else if(req.url == '/login'){
      res.end('<h1>Login Code With Sandhya</h1><p>Hey this is the way to rock the world!</p>');
    }
   else if(req.url == '/about'){
    const data = fs.readFileSync('index.html');
    res.end(data);
   }
   else if(req.url == '/abc'){
    const data = fs.readFileSync('abc.html');
    res.end(data);
   }
    
    else 
    {
      res.end('404 error')
    }
})
server.listen(port, ()=>{
console.log('Server is listing on port ${port}')
});
