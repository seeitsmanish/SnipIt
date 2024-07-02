import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import useRoom from "../hooks/useRoom";
type RoomProps = {};

const Room: React.FC<RoomProps> = () => {
  const { roomSlug } = useParams();
  const navigate = useNavigate();
  if (!roomSlug) {
    navigate("/not-found");
  }
  const { code, setCode } = useRoom(roomSlug as string);

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1">
        <CodeEditor code={code} setCode={setCode} />
      </div>
    </div>
  );
};
export default Room;
