import { useEffect, useRef, useState } from "react";
import useThrottle from "./useThrottle";

export default function useRoom(roomSlug: string) {
  const [code, setCode] = useState("");
  const throttledCode = useThrottle(code, 100);

  let socketClient = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(`ws://192.168.1.5:8080/${roomSlug}`);
    socketClient.current = socket;
    socket.onopen = () => {
      console.log("Connection Eshtablished!");
    };
    socket.onmessage = (value) => {
      console.log("message broadcasted:" + value.data);
      setCode(value.data);
    };

    return () => {
      if (socketClient.current) {
        socketClient.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (
      socketClient.current &&
      socketClient.current.readyState === WebSocket.OPEN
    ) {
      socketClient.current.send(throttledCode);
    }
  }, [throttledCode]);

  return {
    code,
    setCode,
  };
}
