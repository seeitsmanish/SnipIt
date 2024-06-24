import { WebSocket, WebSocketServer } from "ws"
import { Server } from 'http';
import { Request } from "express";

export type Room = {
    name: string;
    clients: Set<WebSocket>;
}

const rooms: Map<string, Room> = new Map();

export const setUpWebSocketServer = (httpServer: Server) => {
    const wss = new WebSocketServer({ server: httpServer });

    // When a client connects to wss
    wss.on('connection', (socketInstance: WebSocket, request: Request,) => {

        // If there was some error client connecting to wss
        socketInstance.on('error', console.error);

        // When a client connects, get the roomName and add it to rooms
        const roomName = extractRoomUrl(request);
        joinRoom(socketInstance, roomName);

        // broadcast the message to all the members in room
        socketInstance.on('message', (data) => {
            const message = data.toString();
            broadcastMessageInRoom(roomName, message);
        })
    })
}

function extractRoomUrl(request: Request) {
    const requestArray = request.url?.split('/');
    if (requestArray.length > 2) return null;
    return requestArray[1];
}

function joinRoom(socketInstance: WebSocket, roomName: string | null) {
    if (!roomName) return;
    let room = rooms.get(roomName);
    if (!room) {
        room = { name: roomName, clients: new Set() };
    }
    room.clients.add(socketInstance);
    rooms.set(roomName, room);
}

function broadcastMessageInRoom(roomName: string | null, message: string) {
    if (!roomName) return;
    const room = rooms.get(roomName);
    room?.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    })
}

setInterval(() => {
    console.log(rooms);
}, 5000)