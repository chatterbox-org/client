import { useParams } from "solid-app-router";

import { BaseRoute } from "../def";
import Message from "../components/Message";
import Button from "../components/Button";
import { Suspense } from "solid-js";
import ChatTopbar from "../components/ChatTopbar";

export default {
    name: "Chat",
    path: "/chat/:id",
    component: () => {
        const params = useParams();

        return (
            <div class="flex flex-col gap-2">
                <ChatTopbar text={params.id}/>
                <Suspense fallback={<div>Loading...</div>}>

                </Suspense>
            </div>
        );
    },
} as BaseRoute;
