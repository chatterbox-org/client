import { JSX } from "solid-js";
import { currentSocket, setCurrentSocket } from "../lib/connect";

interface ChatProps {
    children?: JSX.Element[] | JSX.Element;
}

export default ({ children }: ChatProps): JSX.Element => {
    return (
        <div class="flex flex-col gap-2">

        </div>
    );
};
