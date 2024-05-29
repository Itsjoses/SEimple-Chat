import { io, Socket } from "socket.io-client";
import { createContext } from "react";


export const socket = io(import.meta.env.VITE_API_URL)
export const WebsocketContext = createContext<Socket>(socket)
export const WebsocketProvider = WebsocketContext.Provider