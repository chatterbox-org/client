import { Message } from "../def";
import { currentUsername } from "../routes/Main";
import { currentSocket } from "./connect";

export default function sendMessage(content: string) {
    currentSocket()?.emit("messageCreate", {
        author: {
            username: currentUsername(),
        },
        content: content,
    } as Message)
}