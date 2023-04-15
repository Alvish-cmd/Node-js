const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method
    // quick ways to terminate the process, even if the asynchronous calls are still running.
    // process.exit

    if (url === "/") {
        res.write('<html>');
        res.write('<head><title>Please enter a meassge</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" nama="message"><button type="submit">Send</button></from></body>')
        res.write('</html>')
        return res.end();
    }
    if(url === "/message" && method === "POST"){
        fs.writeFileSync("message.txt","Dummy");
        res.statusCode = 302;
        res.setHeader("Location","/");
        return res.end();
    }
    res.setHeader('content-type', 'text/html')
    res.write('<html>');
    res.write('<head><title>This is my first Node server</title></head>');
    res.write('<body><h1>Hello this is myy first server</h1></body>')
    res.write('</html>')
    res.end();

})

server.listen(3000)
