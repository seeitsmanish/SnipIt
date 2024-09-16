import React from "react";
import { RoomProvider } from "./context/RoomContext";
import { UsersProvider } from "./context/UsersContext";
import { LanguageProvider } from "./context/LanguageContext";
import { MarkdownProvider } from "./context/MarkdownContext";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <MarkdownProvider>
      <RoomProvider>
        <UsersProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </UsersProvider>
      </RoomProvider>
    </MarkdownProvider>
  );
};
export default Providers;
