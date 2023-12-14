require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");

const port = process.env.PORT || 3003;

app.use(cors());

server.listen(port, () => {
  console.log(`App is listening on port ${port}.`);
});
console.log("Server listening on `localhost:" + port + "`.");
