exports.chat = (io, socket) => {
  socket.userId = "";
  socket.roomId = "";

  socket.on("join", ({ userId, roomId }) => {
    socket.userId = userId;
    socket.roomId = roomId;
    socket.join(roomId);

    console.log(`${socket.userId} joins ${socket.roomId}`);

    io.in(roomId).emit("notification", {
      title: `${userId} just joined the room`,
    });
  });

  socket.on("message", ({ message }) => {
    io.in(socket.roomId).emit("message", {
      userId: socket.userId,
      text: message,
    });
  });

  socket.on("leave", () => {
    socket.to(socket.roomId).emit("notification", {
      title: `${socket.userId} just left the room`,
    });
  });

  socket.on("disconnect", () => {
    socket.to(socket.roomId).emit("notification", {
      title: `${socket.userId} just disconnected from the server`,
    });
  });
};
