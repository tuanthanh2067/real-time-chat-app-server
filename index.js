const { createServer } = require("http");

const app = require("./app");

const PORT = process.env.PORT || 5000;
const httpServer = createServer(app);

httpServer.listen(PORT);
