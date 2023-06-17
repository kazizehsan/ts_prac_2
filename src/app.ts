import http from "http";
import { serverName } from "./server-name";

const hostname: string = "localhost";
const port: number = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Helloo there World from ${serverName}!\n`);
});

server.listen(port, hostname, () => {
  console.log(`${serverName} up and running at http://${hostname}:${port}`);
});
