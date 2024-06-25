import WebSocket, { WebSocketServer } from "ws"
import { Server } from 'http';
import { RoomManager } from "./RoomManager";

const roomManagerInstance = RoomManager.getInstance();

export const setUpWebSocketServer = (httpServer: Server) => {
    const wss = new WebSocketServer({ server: httpServer });

    // When a client connects to wss
    wss.on('connection', (socketInstance: WebSocket, request: Request,) => {

        // If there was some error client connecting to wss
        socketInstance.on('error', console.error);

        // When a client connects, get the roomName and add it to rooms
        const roomName = roomManagerInstance.extractRoomUrl(request);
        roomManagerInstance.joinRoom(socketInstance, roomName);

        // broadcast the message to all the members in room
        socketInstance.on('message', (data) => {
            const message = data.toString();
            roomManagerInstance.broadcastMessageInRoom(roomName, message);
        })

        socketInstance.on('close', () => {
            roomManagerInstance.deleteSocketFromRoom(socketInstance, roomName);
        })
    })
}




setInterval(() => {
    roomManagerInstance.logState();
}, 5000)