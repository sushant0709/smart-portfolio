"use client";

import { Bot } from "lucide-react";
import {useState} from "react";
import AIChatBox from "./AIChatBox";

export default function AIChatButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>
            <Bot size={24} />
            </button>
            <AIChatBox open={open} onClose={() => setOpen(false)} />
        </>
    );
}