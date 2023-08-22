const http =require('http');
const server=http.createServer((req, res)=>{
    if(req.url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.end(`<h2>Helloooo</h2>
        <a href='/about'>click</a>`);
    }
    if(req.url==='/about'){
        res.setHeader('Content-Type', 'text/html');
        res.end(`<h2>SCUZZAA</h2>`);
    }
    
});
server.listen(5000);