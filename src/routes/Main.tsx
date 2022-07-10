import { createSignal } from "solid-js";
import { useNavigate } from "solid-app-router";

import Button from "../components/Button";
import TextField from "../components/TextField";
import { trimUrl } from "../lib/urlUtils";
import { BaseRoute } from "../def";
import { currentSocket } from "../lib/connect";

export const [serverUrl, setServerUrl] = createSignal("");
export const [currentUsername, setCurrentUsername] = createSignal("");

export default {
    name: "Main",
    path: "/",
    component: () => {
        currentSocket()?.disconnect();
        const [error, setError] = createSignal<Error>();
        const navigate = useNavigate();

        return (
            <div class="flex flex-col gap-4 items-center justify-center h-full <md:text-center">
                <div>
                    <p class="text-xl">Welcome to Chatterbox.</p>
                    <p>What you are seeing is beta software. Anything is subject to change.</p>
                </div>

                <div class="flex md:flex-row <md:flex-col gap-3">
                    <TextField onChange={(e: Event) => { setServerUrl((e.target as HTMLTextAreaElement).value) }} placeholder="Enter a server URL" />
                    <TextField onChange={(e: Event) => { setCurrentUsername((e.target as HTMLTextAreaElement).value) }} placeholder="Enter a username" />
                    <Button onClick={() => {
                        try {
                            navigate(`/chat/${trimUrl(serverUrl())}`) 
                        } catch (err) {
                            setError(err as Error);
                        }
                    }}>Submit</Button>
                </div>
                <div class="text-sm">{error()?.message}</div>
            </div>
        );
    },
} as BaseRoute;