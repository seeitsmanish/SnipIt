import express from 'express';
import { PORT } from './config/serverConfig';
import { setUpWebSocketServer } from './webSocketServer';
import roomCleanUpJob from './roomCleanUpJob';
const app = express();

const httpServer = app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});

setUpWebSocketServer(httpServer);
roomCleanUpJob();


