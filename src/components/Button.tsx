import { JSX } from "solid-js";

interface ButtonProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    onClick: () => void;
}

export default ({ children, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} class="border-2 border-outline rounded-md text-center bg-transparent transition-colors w-auto rounded-md items-center p-2 hover:(bg-outline text-primary)">
            {children}
        </button>
    );
};