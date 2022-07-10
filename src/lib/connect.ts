import { createSignal } from "solid-js";
import { io, Socket } from "socket.io-client";

export const [currentSocket, setCurrentSocket] = createSignal<Socket>();

export default function connect(url: string) {
    try {
        return setCurrentSocket(io(url));

        
    } catch {
        throw new Error("Socket failed to connect...");
    }
}