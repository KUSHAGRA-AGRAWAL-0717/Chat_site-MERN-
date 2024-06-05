import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors"; // Import cors middleware

const app = express();
// app.use(cors()); // Use cors middleware

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('user connected', socket.id);
});

export { app, io, server };
