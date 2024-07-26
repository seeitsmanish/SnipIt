import { Editor, Monaco } from "@monaco-editor/react";
import React, { useRef } from "react";
import { MonacoBinding } from "y-monaco";
import { WebsocketProvider } from 'y-websocket'
import * as Y from 'yjs'
import * as monaco from 'monaco-editor';
const BASE_URL = import.meta.env.VITE_BASE_BACKEND_URL
type CodeEditorProps = {
  roomSlug: string;
}
const CodeEditor: React.FC<CodeEditorProps> = ({ roomSlug }) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
    // Initialize YJS
    const doc = new Y.Doc();

    const provider = new WebsocketProvider(BASE_URL, roomSlug, doc);

    // Set up awareness information
    provider.awareness.setLocalStateField('user', {
      name: 'User ' + Math.floor(Math.random() * 100),
      color: '#' + Math.floor(Math.random() * 16777215).toString(16)
    });

    const type = doc.getText("monaco");

    // Bind YJS to Monaco 
    new MonacoBinding(type, editor.getModel()!, new Set([editor]), provider.awareness);
    console.log(provider.awareness);
  }

  return (
    <Editor
      className="rounded-sm border border-cyan-400"
      defaultValue=""
      language="text"
      theme="snipitTheme"
      loading={<div className="text-cyan-600"> Loading...</div>}
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
  );
};

export default CodeEditor;