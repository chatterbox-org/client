import { Socket } from "socket.io-client";
import { Message } from "../def";
import { messageStore, setMessageStore } from "./setupStores";

export default function setupSocket(socket: Socket) {
    setMessageStore([]);
    socket.on("messageCreate", (message: Message) => {
        setMessageStore([...messageStore, message]);
    })
}