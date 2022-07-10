import { Socket } from "socket.io-client";

export default function setupSocket(socket: Socket) {
    socket.on("messageCreate", () => {
        
    })
}