import { createContext, useContext, useState } from "react"

type UsersContextType = {
    users: number
    setUsers: (users: number) => void
}

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState(0);
    return (
        <UsersContext.Provider value={{ users, setUsers }}>
            {children}
        </UsersContext.Provider>
    )
}
export const useUsers = () => {
    const context = useContext(UsersContext);
    if (context === undefined) {
        throw new Error('useUsers must be used within a UsersProvider');
    }
    return context;
}


