import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CodeEditor from "../components/CodeEditor/CodeEditor";
type RoomProps = {};

const Room: React.FC<RoomProps> = () => {
  const { roomSlug } = useParams();

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1">
        <CodeEditor />
      </div>
    </div>
  );
};
export default Room;
