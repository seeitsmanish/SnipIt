import { Editor, Monaco } from "@monaco-editor/react";
import React, { useEffect, useRef } from "react";
import { MonacoBinding } from "y-monaco";
import { WebsocketProvider } from 'y-websocket'
import * as Y from 'yjs'
import * as monaco from 'monaco-editor';
import { useLanguage } from "../../context/LanguageContext";

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
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const providerRef = useRef<WebsocketProvider | null>(null);
  const docRef = useRef<Y.Doc | null>(null);

  useEffect(() => {
    const doc = new Y.Doc();
    docRef.current = doc;

    const provider = new WebsocketProvider(`${BASE_URL}/collaboration`, roomSlug, doc);
    providerRef.current = provider;

    const initialAwarenessState: AwarenessState = {
      language,
      timestamp: 0,
    };
    provider.awareness.setLocalState(initialAwarenessState);


    provider.awareness.on('update', () => {
      const states = provider.awareness.getStates();
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
      new MonacoBinding(yText, editor.getModel()!, new Set([editor]), providerRef.current.awareness);
    }
  }

  return (
    <div className="h-full">
      <Editor
        className="rounded-sm"
        defaultValue=""
        language={language}
        theme="snipitTheme"
        loading={<div className="text-cyan-600">Loading...</div>}
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
              "editor.selectionBackground": "#70E1FA",
              "editor.lineHighlight": "#70E1FA",
              "editor.lineHighlightBorder": "#040712",
              "editorLineNumber.foreground": "#70E1FA",
            },
          });
        }}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default CodeEditor;