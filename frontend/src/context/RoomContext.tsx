import { ReactNode, createContext, useContext, useState } from "react";

type RoomContextType = {
    isRoom: boolean;
    updateIsRoom: (isRoom: boolean) => void;
}

const RoomContext = createContext<RoomContextType | undefined>(undefined);

export const RoomProvider = ({ children }: { children: ReactNode }) => {
    const [isRoom, updateIsRoom] = useState(false);
    return (
        <RoomContext.Provider value={{ isRoom, updateIsRoom }}>
            {children}
        </RoomContext.Provider>
    )
}

export const useRoom = () => {
    const context = useContext(RoomContext);
    if (!context) {
        throw new Error("useRoom must be used within a RoomProvider");
    }
    return context;
}