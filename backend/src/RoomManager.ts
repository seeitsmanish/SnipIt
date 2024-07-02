import { WebSocket } from "ws";
import { WebSocketWithId } from "./webSocketServer";

export interface Room {
    name: string;
    latestOperationTime: Date;
    clients: Set<WebSocketWithId>;
    contentOfRoom: string;
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
        const requestArray = request.url?.split("/");
        if (requestArray.length > 2) return null;
        return requestArray[1];
    }

    joinRoom(socketInstance: WebSocketWithId, roomName: string | null) {
        if (!roomName) return;
        let room = this.rooms.get(roomName);
        if (!room) {
            room = {
                name: roomName,
                latestOperationTime: new Date(),
                clients: new Set(),
                contentOfRoom: "",
            };
        }
        room.clients.add(socketInstance);
        room = {
            ...room,
            latestOperationTime: new Date(),
        };
        this.rooms.set(roomName, room);
        this.broadcastMessageInRoom(room.name, room.contentOfRoom, socketInstance);
    }

    broadcastMessageInRoom(
        roomName: string | null,
        message: string,
        socketClient: WebSocketWithId
    ) {
        if (!roomName) return;
        const room = this.rooms.get(roomName);
        if (room) {
            room.contentOfRoom = message;
            room.latestOperationTime = new Date();
            room.clients.forEach((client) => {
                // console.log(client.id !== socketClient.id);
                // console.log(client.id)
                // console.log(socketClient.id)
                if ((client.id !== socketClient.id) && (client.readyState === WebSocket.OPEN)) {
                    console.log("room content: " + room.contentOfRoom);
                    console.log("client id: " + client.id);
                    console.log("socketclient id: " + socketClient.id);
                    console.log();
                    client.send(room.contentOfRoom);
                }
            });
        }
    }

    deleteSocketFromRoom(
        socketInstance: WebSocketWithId,
        roomName: string | null
    ) {
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
        this.rooms.forEach((room) => {
            console.log({
                room: room.name,
                time: room.latestOperationTime.toLocaleString(),
            });
        });
    }
}
