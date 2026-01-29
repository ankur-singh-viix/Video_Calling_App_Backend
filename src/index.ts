import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import  ServerConfig  from "./config/serverConfig.js";
import roomHandler from "./handlers/roomHandler.js";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`New User connected: ${socket.id}`);

    roomHandler(socket);

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(ServerConfig.PORT , () => {
    console.log(`Server is up at port ${ServerConfig.PORT}`);
});