import React from "react";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import withRoom from "../hocs/withRoom";
type RoomProps = {
  roomSlug?: string;
};

const Room: React.FC<RoomProps> = ({ roomSlug }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="h-full">
        <CodeEditor roomSlug={roomSlug as string} />
      </div>
    </div>
  );
};
export default withRoom(Room);
