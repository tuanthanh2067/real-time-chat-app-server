const { createServer } = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const PORT = process.env.PORT || 5000;
const httpServer = createServer(app);

mongoose
  .connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // listen on port
    httpServer.listen(PORT);
  })
  .catch((err) => {
    console.log("Unable to start the server" + err);
    process.exit();
  });

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
