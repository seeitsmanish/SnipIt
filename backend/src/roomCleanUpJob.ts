import cron from 'node-cron';
import { RoomManager, Room } from './RoomManager';
import { NODE_ENV } from './config/serverConfig';
export default function roomCleanUpJob() {

    const isDevMode = NODE_ENV === 'dev';
    // Every 10 seconds in dev mode, every hour at minute 0 otherwise
    const cronSchedule = isDevMode ? '*/10 * * * * *' : '0 0 * * *';
    // 1 minute threshold in dev mode, 24 hours otherwise
    const inAcitivityThreshold = isDevMode ? 60 * 1000 : 60 * 60 * 24 * 1000;
    const cronJob = cron.schedule(cronSchedule, () => {

        const roomsManagerInstance = RoomManager.getInstance();

        const rooms = roomsManagerInstance.getRooms();
        const currentTime = new Date().getTime();
        rooms.forEach((room: Room) => {
            if (
                room.clients.size === 0 &&
                currentTime - room.latestOperationTime.getTime() > inAcitivityThreshold
            ) {
                roomsManagerInstance.deleteRoom(room.name);
                console.log(`deleted room named: ${room.name}`);
            }
        })

        console.log("Room Clean Up Job Complete!");
    })
    cronJob.start();
    return cronJob;
}

