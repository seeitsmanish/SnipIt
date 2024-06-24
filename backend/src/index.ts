import express from 'express';
import { WebSocket, WebSocketServer } from 'ws';
import { PORT } from './config/serverConfig';
import { setUpWebSocketServer } from './webSocketServer';

const app = express();

const httpServer = app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});

setUpWebSocketServer(httpServer);


