const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("./routers/auth/auth-router");

server.use(express.json());
server.use(cors());
server.use(helmet());

// routers
server.use("/api/auth", authRouter);

server.get("/", (_, res) =>
    res.json({ hello: "Welcome to Twitco's API. You're in early. 🤖" })
);

module.exports = server;
