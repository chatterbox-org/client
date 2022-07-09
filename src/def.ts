import { RouteDefinition } from "solid-app-router";

export type BaseRoute = RouteDefinition & {
    name: string;
}

export interface User {
    username: string;
}

export interface Message {
    content: string;
    author: User;
    timestamp: number;
}