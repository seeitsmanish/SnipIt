import { createContext, ReactNode, useContext, useState } from "react";

type MardownContextType = {
  markdown: string | undefined;
  setMarkdown: (markdown: string | undefined) => void;
};

const MarkdownContext = createContext<MardownContextType | undefined>(
  undefined,
);

export const MarkdownProvider = ({ children }: { children: ReactNode }) => {
  const [markdown, setMarkdown] = useState<string | undefined>("");
  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
};

export const useMarkdown = () => {
  const context = useContext(MarkdownContext);
  if (context === undefined) {
    throw new Error("useMarkdown must be used within a MarkdownProvider");
  }
  return context;
};
