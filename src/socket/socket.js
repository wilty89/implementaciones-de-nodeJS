module.exports = (io) => {
  io.on("connection", function (socket) {
    const id_handshake = socket.id;
    let { payload } = socket.handshake.query;
    console.log(`Nuevo dispositivo conectado: ${id_handshake}`);
    if (!payload) {
      console.log(`${`Sin payload`}`);
    } else {
      payload = JSON.parse(payload);
      // console.log(payload)
    }
    socket.on("Client-send-data", function (data) {
      console.log(data);
      //socket.emit("Server-send-data", data);
      //socket.broadcast.emit("messages", data);
    });

    socket.emit("messages", "socket activo");



    socket.on("message", data => {
      console.log(data)
      io.emit("messageResponse", data)
    })

    socket.on("typing", data => (
      socket.broadcast.emit("typingResponse", data)
    ))

    socket.on("newUser", data => {
      users.push(data)
      io.emit("newUserResponse", users)
    })

    socket.on('join', (data) => {
      socket.join(data.room);
      socket.broadcast.to(data.room).emit('user joined');
  });

  socket.on('message2', (data) => {
      io.in(data.room).emit('new message', {user: data.user, message: data.message});
  });

    socket.on("disconnect", function () {
      console.log("user disconnected");
    });
    socket.conn.once("upgrade", () => {
      console.log(
        "Hemos pasado de HTTP Long-Polling a ",
        socket.conn.transport.name
      );
    });
  });
  
};
