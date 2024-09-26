import React from "react";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import withRoom from "../hocs/withRoom";
type RoomProps = {
  roomSlug?: string;
};

const Room: React.FC<RoomProps> = ({ roomSlug }) => {
  return (
    <div className="flex flex-1 flex-col">
      <CodeEditor roomSlug={roomSlug as string} />
    </div>
  );
};
export default withRoom(Room);
