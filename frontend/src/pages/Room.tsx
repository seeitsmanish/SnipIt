import React from "react";
import { useParams } from "react-router-dom";
type RoomProps = {};

const Room: React.FC<RoomProps> = () => {
  const { roomSlug } = useParams();
  console.log(roomSlug);
  return <div className="text-white">Hiiii There</div>;
};
export default Room;
