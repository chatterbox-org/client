import { JSX, For } from "solid-js";
import Message from "./Message";
import connect from "../lib/connect";
import { messageStore } from "../lib/setupStores";

interface ChatProps {
    children?: JSX.Element[] | JSX.Element;
    url: string;
}

export default ({ children, url }: ChatProps): JSX.Element => {
    connect(url);

    return (
        <div class="flex flex-col gap-2">
            <For each={messageStore}>
                {(recieved, i) => (
                    <Message
                        message={recieved}
                    />
                )}
            </For>
        </div>
    );
};
