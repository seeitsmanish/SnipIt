import { WebSocket } from "ws";

export interface Room {
    name: string;
    latestOperationTime: Date;
    clients: Set<WebSocket>;
    contentOfRoom: string,
}

export class RoomManager {

    private static instance: RoomManager; // Creates a static instance
    private rooms: Map<string, Room> = new Map();

    private constructor() { } // Making constructor private for singleton behavious

    public static getInstance() {
        // Lazy Loads the instance
        if (!RoomManager.instance) {
            RoomManager.instance = new RoomManager();
        }
        return RoomManager.instance;
    }

    extractRoomUrl(request: Request) {
        const requestArray = request.url?.split('/');
        if (requestArray.length > 2) return null;
        return requestArray[1];
    }

    joinRoom(socketInstance: WebSocket, roomName: string | null) {
        if (!roomName) return;
        let room = this.rooms.get(roomName);
        if (!room) {
            room = {
                name: roomName,
                latestOperationTime: new Date(),
                clients: new Set(),
                contentOfRoom: ''
            };
        }
        room.clients.add(socketInstance);
        room = {
            ...room,
            latestOperationTime: new Date(),
        }
        this.rooms.set(roomName, room);
    }

    broadcastMessageInRoom(roomName: string | null, message: string) {
        if (!roomName) return;
        const room = this.rooms.get(roomName);
        if (room) {
            room.contentOfRoom += message;
            room.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(room.contentOfRoom);
                }
            })
        }
    }

    deleteSocketFromRoom(socketInstance: WebSocket, roomName: string | null) {
        if (!roomName) return;
        const room = this.rooms.get(roomName);
        if (!room) return;
        if (room.clients.has(socketInstance)) {
            room.clients.delete(socketInstance);
        }
        room.latestOperationTime = new Date();
    }

    getRooms() {
        return Array.from(this.rooms.values());
    }

    deleteRoom(roomName: string) {
        if (this.rooms.has(roomName)) {
            this.rooms.delete(roomName);
        }
    }

    logState() {
        console.log(this.rooms);
    }
}