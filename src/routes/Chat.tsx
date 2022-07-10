import { useParams } from "solid-app-router";
import { lazy, createSignal, Suspense } from "solid-js";

import { BaseRoute } from "../def";

const Chat = lazy(() => import("../components/Chat"));
import ChatTopbar from "../components/ChatTopbar";
import TextField from "../components/TextField";
import Button from "../components/Button";
import sendMessage from "../lib/sendMessage";

export default {
    name: "Chat",
    path: "/chat/:id",
    component: () => {
        const params = useParams();
        const [content, setContent] = createSignal("");

        return (
            <div class="flex flex-col gap-2">
                <ChatTopbar text={params.id}/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Chat url={params.id}/>
                </Suspense>
                <div class="flex flex-row">
                    <TextField onChange={(e: Event) => { setContent((e.target as HTMLTextAreaElement).value) }}/>
                    <Button onClick={() => {
                        sendMessage(content());
                    }}>Send</Button>
                </div>
            </div>
        );
    },
} as BaseRoute;
