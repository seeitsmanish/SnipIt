import WebSocket, { WebSocketServer } from "ws"
import { Server } from 'http';
import { RoomManager } from "./RoomManager";
import { v4 as uuidv4 } from 'uuid';

const roomManagerInstance = RoomManager.getInstance();

export type WebSocketWithId = WebSocket & {
    id: string;
}

export const setUpWebSocketServer = (httpServer: Server) => {
    const wss = new WebSocketServer({ server: httpServer });

    wss.on('connection', (socketInstance: WebSocketWithId, request: Request,) => {

        socketInstance.id = uuidv4();

        socketInstance.on('error', console.error);

        const roomName = roomManagerInstance.extractRoomUrl(request);
        roomManagerInstance.joinRoom(socketInstance, roomName);

        socketInstance.on('message', (data) => {
            const message = data.toString();
            roomManagerInstance.broadcastMessageInRoom(roomName, message, socketInstance);
        })

        socketInstance.on('close', () => {
            roomManagerInstance.deleteSocketFromRoom(socketInstance, roomName);
        })
    })
}




setInterval(() => {
    roomManagerInstance.logState();
}, 5000)