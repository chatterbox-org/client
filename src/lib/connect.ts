import { createSignal } from "solid-js";
import { io, Socket } from "socket.io-client";
import setupSocket from "./setupSocket";

export const [currentSocket, setCurrentSocket] = createSignal<Socket>();

export default function connect(url: string) {
    try {
        setCurrentSocket(io(url));
        setupSocket(currentSocket()!);

        return currentSocket();
    } catch {
        throw new Error("Socket failed to connect...");
    }
}