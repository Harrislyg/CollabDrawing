const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index')
})

io.on('connection', function (socket) {
  console.log('a user connected')
  socket.on('disconnect', function () {
    console.log('user disconnected')
  })
})

io.on('connection', function (socket) {
  socket.on('drawBlack', function (dom) {
    io.emit('drawBlack', dom)
    console.log(dom)
  })
  socket.on('drawWhite', function (dom) {
    io.emit('drawWhite', dom)
    console.log(dom)
  })
})

server.listen(3000, () => {
  console.log('server lsitening on port 3000')
})
