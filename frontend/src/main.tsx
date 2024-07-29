import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RoomProvider } from "./context/RoomContext.tsx";
import { UsersProvider } from "./context/UsersContext.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RoomProvider>
        <UsersProvider>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </UsersProvider>
    </RoomProvider>
);
