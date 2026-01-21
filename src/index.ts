import express from "express";
import http from "http";
import  ServerConfig  from "./config/serverConfig.js";
import { Server } from "socket.io";
import cors from "cors";


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
    console.log(`User connected: ${socket.id}`);

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
})

server.listen(ServerConfig.PORT , () => {
    console.log(`Server is up at port ${ServerConfig.PORT}`);
});