import { JSX } from "solid-js";
import { Message, User } from "../def";

interface MessageProps {
    children?: JSX.Element[] | JSX.Element;
    message: Message
}

export default ({ children, message }: MessageProps): JSX.Element => {
    return (
        <div class="flex flex-col gap-0.5">
            <div class="text-xs inline-block">{new Date(message.timestamp).toLocaleString()}</div>

            <div class="flex flex-row gap-3">
                <div class="font-bold">{message.author.username}</div>
                <div>{message.content}</div>
            </div>
        </div>
    )
};