const http = require("http");

const app = require("./app");

const port = 3701;

const server = http.createServer(app);

server.listen(port, function() {
  console.info("Express server listening on port " + port);
});
