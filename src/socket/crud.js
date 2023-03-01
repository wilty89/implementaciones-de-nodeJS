let online = 0;
function routerApi(io) {
    io.on('connection', (socket) => {
        online++;
        console.log(`Socket ${socket.id} connected.`);
        console.log(`Online: ${online}`);
        io.emit('visitor enters', online);
      
        socket.on('add', data => socket.broadcast.emit('add', data));
        socket.on('update', data => socket.broadcast.emit('update', data));
        socket.on('delete', data => socket.broadcast.emit('delete', data));
      
        socket.on('disconnect', () => {
          online--;
          console.log(`Socket ${socket.id} disconnected.`);
          console.log(`Online: ${online}`);
          io.emit('visitor exits', online);
        });
    });
}

module.exports = routerApi;
