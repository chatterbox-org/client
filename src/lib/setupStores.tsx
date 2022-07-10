import { createStore } from "solid-js/store";
import { Message } from "../def";

export const [messageStore, setMessageStore] = createStore<Message[]>([]);