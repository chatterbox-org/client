import { useNavigate, useParams } from "solid-app-router";

import { BaseRoute } from "../def";
import Message from "../components/Message";
import Button from "../components/Button";

export default {
    name: "Chat",
    path: "/chat/:id",
    component: () => {
        const params = useParams();
        const navigate = useNavigate();

        return (
            <div class="flex flex-col gap-2">
                <div class="border-2 border-outline rounded-md p-2 h-min flex flex-row items-center">
                    <span class="text-xl">{params.id}</span>
                    <div class="ml-auto">
                        <Button onClick={() => { navigate("/") }}>Go home</Button>
                    </div>
                </div>
                <div class="flex flex-col">
                    <Message message={{ content: `Hi! The backend isn't complete, so there's no functionality.`, author: { username: "Beef" }, timestamp: Date.now() }}/>
                </div>
            </div>
        );
    },
} as BaseRoute;