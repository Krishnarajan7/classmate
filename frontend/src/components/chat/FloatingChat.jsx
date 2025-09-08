import { useState, FormEvent } from "react";
import { Send, Bot, Paperclip, Mic, CornerDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble";
import ChatInput from "@/components/ui/chat-input";

import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat-message-list";

const FloatingChat = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, content: "Hi there 👋 Need Help Getting Started?", sender: "ai" },
    { id: 2, content: "I'm here to help you with any questions about our testing platform!", sender: "ai" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      content: message,
      sender: "user",
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setMessage("");
    setIsLoading(true);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        content: "Thanks for your message! I'm here to help. What specific questions do you have about our testing platform?",
        sender: "ai",
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleAttachFile = () => {
    // File attachment functionality
  };

  const handleMicrophoneClick = () => {
    // Voice input functionality
  };

  return (
    <ExpandableChat
      size="md"
      position="bottom-right"
      icon={<Bot className="h-6 w-6" />}
    >
      <ExpandableChatHeader className="flex-col text-center justify-center bg-primary/5">
        <h1 className="text-lg font-semibold text-foreground">Chat with AI ✨</h1>
        <p className="text-sm text-muted-foreground">
          Ask me anything about the testing platform
        </p>
      </ExpandableChatHeader>

      <ExpandableChatBody>
        <ChatMessageList>
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.sender === "user" ? "sent" : "received"}
            >
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                fallback={message.sender === "user" ? "U" : "AI"}
              />
              <ChatBubbleMessage
                variant={message.sender === "user" ? "sent" : "received"}
              >
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}

          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                fallback="AI"
              />
              <ChatBubbleMessage isLoading />
            </ChatBubble>
          )}
        </ChatMessageList>
      </ExpandableChatBody>

      <ExpandableChatFooter>
        <form
          onSubmit={handleSubmit}
          className="relative rounded-lg border border-border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
        >
          <ChatInput
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
          />
          <div className="flex items-center p-3 pt-0 justify-between">
            <div className="flex">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={handleAttachFile}
              >
                <Paperclip className="size-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={handleMicrophoneClick}
              >
                <Mic className="size-4" />
              </Button>
            </div>
            <Button type="submit" size="sm" className="ml-auto gap-1.5" disabled={!message.trim()}>
              Send Message
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
};

export default FloatingChat;