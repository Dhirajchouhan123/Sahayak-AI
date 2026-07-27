import { useState } from "react";
import { Bot, Send, User } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import api from "@/services/api";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
}

function ChatPanel() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hello! Upload a PDF and ask me anything about it.",
    },
  ]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const question = input;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await api.post("/chat", {
        question,
      });

      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: response.data.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text:
          error.response?.data?.detail ??
          "Something went wrong while contacting the AI.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <Bot className="h-8 w-8 text-blue-600" />

        <h3 className="text-2xl font-bold">
          Chat with AI
        </h3>
      </div>

      <div className="mt-6 h-96 overflow-y-auto space-y-4 rounded-xl bg-slate-50 p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            {message.sender === "ai" && (
              <Bot className="mt-1 h-5 w-5 text-blue-600" />
            )}

            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "border bg-white"
              }`}
            >
              {message.text}
            </div>

            {message.sender === "user" && (
              <User className="mt-1 h-5 w-5 text-slate-600" />
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-3">
            <Bot className="mt-1 h-5 w-5 text-blue-600" />

            <div className="rounded-2xl border bg-white px-4 py-3 text-slate-500">
              Thinking...
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex gap-3">
        <input
          type="text"
          placeholder="Ask something about your document..."
          value={input}
          disabled={loading}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Button
          onClick={handleSend}
          disabled={loading}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

export default ChatPanel;