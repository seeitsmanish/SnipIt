import { Editor, Monaco } from "@monaco-editor/react";
import React, { useEffect, useRef } from "react";
import { MonacoBinding } from "y-monaco";
import { WebsocketProvider } from "y-websocket";
import * as Y from "yjs";
import * as monaco from "monaco-editor";
import { useLanguage } from "../../context/LanguageContext";
import Loader from "../Loader/Loader";
import { useUsers } from "../../context/UsersContext";

const BASE_URL = import.meta.env.VITE_BASE_BACKEND_URL;

type CodeEditorProps = {
  roomSlug: string;
};

type AwarenessState = {
  language: string;
  timestamp: number;
};

const CodeEditor: React.FC<CodeEditorProps> = ({ roomSlug }) => {
  const { language, setLanguage } = useLanguage();
  const { setUsers } = useUsers();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const providerRef = useRef<WebsocketProvider | null>(null);
  const docRef = useRef<Y.Doc | null>(null);

  useEffect(() => {
    const doc = new Y.Doc();
    docRef.current = doc;

    const provider = new WebsocketProvider(
      `${BASE_URL}/collaboration`,
      roomSlug,
      doc,
    );
    providerRef.current = provider;

    const initialAwarenessState: AwarenessState = {
      language,
      timestamp: 0,
    };
    provider.awareness.setLocalState(initialAwarenessState);

    provider.awareness.on("update", () => {
      const states = provider.awareness.getStates();
      setUsers(states.size);

      let latestLanguage = language;
      let latestTimestamp = initialAwarenessState.timestamp;

      for (const [, state] of states) {
        const clientState = state as AwarenessState;
        if (clientState.timestamp > latestTimestamp) {
          latestLanguage = clientState.language;
          latestTimestamp = clientState.timestamp;
        }
      }

      if (latestLanguage !== language) {
        setLanguage(latestLanguage);
      }
    });

    return () => {
      provider.destroy();
      doc.destroy();
    };
  }, [roomSlug]);

  useEffect(() => {
    if (providerRef.current) {
      const newAwarenessState: AwarenessState = {
        language,
        timestamp: Date.now(),
      };
      providerRef.current.awareness.setLocalState(newAwarenessState);
    }

    if (editorRef.current) {
      monaco.editor.setModelLanguage(editorRef.current.getModel()!, language);
    }
    console.log("Language updated:", language);
  }, [language]);

  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
    editorRef.current = editor;

    if (docRef.current && providerRef.current) {
      const yText = docRef.current.getText("monaco");
      new MonacoBinding(
        yText,
        editor.getModel()!,
        new Set([editor]),
        providerRef.current.awareness,
      );
    }
  }

  useEffect(() => {
    setUsers(providerRef.current?.awareness.getStates().size || 0);
  }, [providerRef.current]);

  return (
    <div className="h-full">
      <Editor
        className="rounded-sm"
        defaultValue=""
        language={language}
        theme="snipitTheme"
        loading={
          <Loader
            className="bg-gray-950"
            loaderClassName="size-[40px] text-white"
          />
        }
        options={{
          fontSize: 18,
          fontLigatures: true,
          fontFamily: '"JetBrains Mono",monospace',
        }}
        beforeMount={(monaco: Monaco) => {
          monaco.editor.defineTheme("snipitTheme", {
            base: "hc-black",
            inherit: true,
            rules: [],
            colors: {
              "editor.background": "#040712",
              "editor.selectionBackground": "#C084FC",
              "editor.lineHighlight": "#C084FC",
              "editor.lineHighlightBorder": "#040712",
              "editorLineNumber.foreground": "#C084FC",
            },
          });
        }}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default CodeEditor;
