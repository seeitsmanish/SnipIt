import React, { useEffect, useState } from "react";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import withRoom from "../hocs/withRoom";
import Markdown from "react-markdown";
import { useLanguage } from "../context/LanguageContext";
// @ts-ignore
import { renderMarkdown } from "monaco-editor/esm/vs/base/browser/markdownRenderer";
import { useMarkdown } from "../context/MarkdownContext";
import cn from "../lib/cn";
type RoomProps = {
  roomSlug?: string;
};

const Room: React.FC<RoomProps> = ({ roomSlug }) => {
  const { language } = useLanguage();
  const { markdown } = useMarkdown();
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (language === "markdown") {
      console.log(html);
      const htmlResult = renderMarkdown({
        value: markdown,
        isTrusted: true,
      }).element.innerHTML;
      setHtml(htmlResult);
    }
  }, [markdown]);

  return (
    <div className="flex flex-1">
      <div
        className={cn("h-full", {
          "w-1/2": language === "markdown",
          "w-full": language !== "markdown",
        })}
      >
        <CodeEditor roomSlug={roomSlug as string} />
      </div>
      {language === "markdown" && (
        <div className="p-5" dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </div>
  );
};
export default withRoom(Room);
