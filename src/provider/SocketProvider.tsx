import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = React.createContext("");

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ id, children }: any) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket: any = io("http://anyendpoint", { query: { id } });
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [id]);

  return (
    <SocketContext.Provider value={socket as any}>
      {children}
    </SocketContext.Provider>
  );
}
