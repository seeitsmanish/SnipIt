import express from 'express';
import { WebSocket, WebSocketServer } from 'ws';

const app = express();

const httpServer = app.listen(8080, () => {
    console.log("Server started at 8080")
});

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(webSocketInstance) {
    webSocketInstance.on('error', err => console.error(err));

    webSocketInstance.on('message', function message(data) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        })
    })

    webSocketInstance.send("Hello! Message from Server!!");
})