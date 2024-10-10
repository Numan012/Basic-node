// =================create own server=============
const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req)
  //exit your server but we never use this bcz it stop our server
  // process.exit()

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Node Title Page</title></head>')
  res.write('<body><h1>This is Server NodeJs Server Text File</h1></body>')
  res.write('</html>')
  res.end()
})

server.listen(3001)