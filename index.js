const { createServer } = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const { chat } = require("./chat");

const PORT = process.env.PORT || 5000;
const httpServer = createServer(app);

const wsServerOptions = {
  cors: {
    origin: "*",
    methods: ["GET"],
  },
};

const io = new Server(httpServer, wsServerOptions);

io.on("connection", (socket) => {
  chat(io, socket);
});

httpServer.listen(PORT);
