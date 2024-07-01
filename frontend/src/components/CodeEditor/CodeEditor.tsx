import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
type CodeEditorProps = {};

const CodeEditor: React.FC<CodeEditorProps> = () => {
  const [code, setCode] = useState<string | undefined>("");

  return (
    <Editor
      value={code}
      onChange={(value) => setCode(value)}
      className="rounded-sm border border-cyan-400"
      defaultValue=""
      language={"text"}
      theme="snipitTheme"
      loading={<div className="text-cyan-600"> Loading...</div>}
      options={{
        fontSize: 18,
        fontLigatures: true,
        fontFamily: '"JetBrains Mono",monospace',
      }}
      beforeMount={(monaco) => {
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
    />
  );
};
export default CodeEditor;
