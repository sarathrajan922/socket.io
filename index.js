const express = require('express')
// const { Socket } = require('socket.io')
const app = express()
const server  = require('http').createServer(app)
const port = 7000
const io = require('socket.io')(server,{cors: {origin: '*'}})

app.set('view engine', 'ejs')

app.get('/home', (req,res)=>{
    res.render('home')
})

server.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})

io.on('connection', (socket) => {
    console.log('user connected : ' + socket.id);

    socket.on('message',(data)=>{
      
        socket.broadcast.emit('message',data)
    })
});