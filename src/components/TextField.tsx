import { JSX } from "solid-js";

interface TextFieldProps {
    children?: JSX.Element[] | JSX.Element;
    placeholder?: string;
    onChange: Function | any;
}

export default ({ children, placeholder, onChange }: TextFieldProps) => {
    return (
        <input type="text" onChange={onChange} placeholder={placeholder} class="border-2 border-outline rounded-md text-center bg-transparent block resize-none p-2 w-min h-min">
            {children}
        </input>
    );
};