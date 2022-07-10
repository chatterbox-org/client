import { JSX } from "solid-js";
import { useNavigate } from "solid-app-router";

import Button from "./Button";

interface ChatTopbarProps {
    children?: JSX.Element[] | JSX.Element;
    text: string;
}

export default ({ children, text }: ChatTopbarProps): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div class="border-2 border-outline rounded-md p-2 h-min flex flex-row items-center">
            <span class="text-xl">{text}</span>
            <div class="ml-auto">
                <Button
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Go home
                </Button>
            </div>
        </div>
    );
};
