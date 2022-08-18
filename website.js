 const {Console}= require('console');
const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000  ;

const server = http.createServer((req, res)=>{
  res.setHeader('Content-Type','text/html')
    console.log(req.url)
    if(req.url='/abc')
    {
      res.statusCode = 200;
      
      
    }
  else if(req.url = '/about')
  {
    res.statusCode = 200;
    res.end('<h1>About Code With Sandhya</h1><p>Hey this is the About code with ButarGirl!</p>');
  } 
  else if(req.url ='/hello'){
    res.statusCode = 200;
    const data = fs.readFileSync('index.html');
    res.end(data.toString());
  }
   
  else{
    res.statusCode = 404; 
    res.end('<h1>Not found</h1><p>This page is not found!</p>')
  }
})
server.listen(port, ()=>{
console.log('Server is listing on port ${port}')
});
