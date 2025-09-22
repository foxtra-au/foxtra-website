"use client";

import { useEffect, useRef, useCallback, useTransition } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    SendIcon,
    LoaderIcon,
    User,
    Bot,
    Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react"

interface ChatMessage {
    id: string;
    text: string;
    isUser: boolean;
    timestamp?: string;
}

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            textarea.style.height = `${minHeight}px`;
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}


interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerClassName?: string;
  showRing?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, containerClassName, showRing = true, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    
    return (
      <div className={cn(
        "relative",
        containerClassName
      )}>
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
            "transition-all duration-200 ease-in-out",
            "placeholder:text-muted-foreground",
            "disabled:cursor-not-allowed disabled:opacity-50",
            showRing ? "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" : "",
            className
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {showRing && isFocused && (
          <motion.span 
            className="absolute inset-0 rounded-md pointer-events-none ring-2 ring-offset-0 ring-violet-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export function AiChatWindow() {
    const [value, setValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [inputFocused, setInputFocused] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [chatId, setChatId] = useState<string | null>(null);
    const [isInitializing, setIsInitializing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [chatStarted, setChatStarted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 50,
        maxHeight: 120,
    });

    // Start Chat function
    const startChat = useCallback(async () => {
        if (isInitializing || chatId) return;
        
        setIsInitializing(true);
        setError(null);
        
        try {
            const response = await fetch('/api/create-chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to create chat: ${response.status}`);
            }

            const data = await response.json();
            
            // Set the chat ID from the API response
            setChatId(data.chatId);
            setChatStarted(true);
            
            // Add the intro message from Retell if available
            if (data.introMessage) {
                const introResponse: ChatMessage = {
                    id: `intro-${Date.now()}`,
                    text: data.introMessage,
                    isUser: false,
                    timestamp: data.created_at || new Date().toISOString()
                };
                setMessages([introResponse]);
            } else {
                setMessages([]);
            }
            
        } catch (err) {
            console.error('Failed to start chat:', err);
            setError('Failed to start chat. Please try again.');
        } finally {
            setIsInitializing(false);
        }
    }, [isInitializing, chatId]);

    // Auto-start chat on component mount
    useEffect(() => {
        // Only initialize on client-side to avoid SSR issues
        if (typeof window !== 'undefined' && !chatStarted && !isInitializing) {
            startChat();
        }
    }, []);


    // Auto-scroll to bottom when messages change
    const scrollToBottom = () => {
        setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({ 
                behavior: "smooth",
                block: "end"
            });
        }, 100);
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (value.trim()) {
                handleSendMessage();
            }
        }
    };

    const handleSendMessage = async (customMessage?: string) => {
        const messageText = customMessage || value.trim();
        if (!messageText || isTyping || !chatId) return;
        
        // Add user message immediately
        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            text: messageText,
            isUser: true,
            timestamp: new Date().toISOString()
        };
        
        setMessages(prev => [...prev, userMessage]);
        setValue("");
        adjustHeight(true);
        setError(null);
        
        // Start AI response
        setIsTyping(true);
        
        try {
            const response = await fetch('/api/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chatId: chatId,
                    message: messageText
                }),
            });

            if (!response.ok) {
                console.error('API response not OK:', response.status, response.statusText);
                throw new Error(`Failed to get AI response: ${response.status}`);
            }

            const data = await response.json();
            console.log('API response data:', data);
            
            const aiResponse: ChatMessage = {
                id: data.message_id || `ai-${Date.now()}`,
                text: data.response,
                isUser: false,
                timestamp: data.timestamp || new Date().toISOString()
            };
            
            setMessages(prev => [...prev, aiResponse]);
            
        } catch (err) {
            console.error('Failed to send message:', err);
            setError('Failed to send message. Please try again.');
            
            // Add fallback error message
            const errorResponse: ChatMessage = {
                id: `error-${Date.now()}`,
                text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
                isUser: false,
                timestamp: new Date().toISOString()
            };
            
            setMessages(prev => [...prev, errorResponse]);
        } finally {
            setIsTyping(false);
        }
    };

    // No cleanup needed for simplified API
    

    return (
        <div className="w-full h-full flex flex-col bg-transparent text-white relative">
            <div className="flex-1 flex flex-col w-full">
                <motion.div 
                    className="relative z-10 space-y-6 max-w-full h-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="text-center space-y-3">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block"
                        >
                            <h3 className="text-xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/60 pb-1">
                                {isInitializing ? "Connecting..." : "Try Our AI Chat Agent"}
                            </h3>
                            <motion.div 
                                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "100%", opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.div>
                        <motion.p 
                            className="text-sm text-white/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {isInitializing ? "Setting up your chat session..." : 
                             error ? "Connection error - Please try again" : 
                             chatStarted ? "Ready to chat - Ask me anything!" :
                             "Click 'Start Chat' to begin"}
                        </motion.p>
                        
                        {error && (
                            <motion.div 
                                className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {error}
                            </motion.div>
                        )}
                    </div>

                    {/* Chat Messages */}
                    <div className="space-y-3 min-h-[200px] max-h-[300px] overflow-y-auto">
                        <AnimatePresence>
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className={cn(
                                        "flex items-start gap-2",
                                        message.isUser ? "justify-end" : "justify-start"
                                    )}
                                >
                                    {!message.isUser && (
                                        <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/60 bg-white/5">
                                            <Bot className="h-4 w-4" />
                                        </div>
                                    )}
                                    <div className={cn(
                                        "max-w-[70%] p-3 rounded-lg text-sm",
                                        message.isUser 
                                            ? "bg-white text-black" 
                                            : "bg-white/10 text-white/90"
                                    )}>
                                        {message.text}
                                    </div>
                                    {message.isUser && (
                                        <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/60 bg-white/5">
                                            <User className="h-4 w-4" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        
                        {/* Typing indicator */}
                        <AnimatePresence>
                            {isTyping && (
                                <motion.div 
                                    className="flex items-start gap-2 justify-start"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/60 bg-white/5">
                                        <Bot className="h-4 w-4" />
                                    </div>
                                    <div className="bg-white/10 text-white/90 p-3 rounded-lg flex items-center gap-2">
                                        <span className="text-sm">AI is typing</span>
                                        <TypingDots />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        
                        {/* Invisible element to scroll to */}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <motion.div 
                        className="relative rounded-xl border border-white/[0.1]"
                        initial={{ scale: 0.98 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="p-3">
                            <Textarea
                                ref={textareaRef}
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                    adjustHeight();
                                }}
                                onKeyDown={handleKeyDown}
                                onFocus={() => setInputFocused(true)}
                                onBlur={() => setInputFocused(false)}
                                placeholder="Ask me anything..."
                                containerClassName="w-full"
                                className={cn(
                                    "w-full px-3 py-2",
                                    "resize-none",
                                    "bg-transparent",
                                    "border-none",
                                    "text-white/90 text-sm",
                                    "focus:outline-none",
                                    "placeholder:text-white/40",
                                    "min-h-[50px]"
                                )}
                                style={{
                                    overflow: "hidden",
                                }}
                                showRing={false}
                            />
                        </div>

                        <div className="p-3 border-t border-white/[0.1] flex items-center justify-between">
                            {isInitializing ? (
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white/70">
                                    <LoaderIcon className="h-4 w-4 animate-spin" />
                                    Starting Chat...
                                </div>
                            ) : chatStarted ? (
                                <motion.a
                                    href="/bookings"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/30"
                                >
                                    <Calendar className="h-4 w-4" />
                                    Schedule Demo
                                </motion.a>
                            ) : null}
                            
                            {chatStarted && (
                                <motion.button
                                    type="button"
                                    onClick={() => handleSendMessage()}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isTyping || !value.trim() || !chatId}
                                    className={cn(
                                        "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                                        "flex items-center gap-2",
                                        (value.trim() && chatId && !isTyping)
                                            ? "text-black shadow-lg"
                                        : "bg-white/[0.05] text-white/40"
                                    )}
                                    style={(value.trim() && chatId && !isTyping) ? { backgroundColor: '#FFCC02' } : {}}
                                >
                                    {isTyping ? (
                                    <LoaderIcon className="w-4 h-4 animate-spin" />
                                ) : (
                                    <SendIcon className="w-4 h-4" />
                                    )}
                                    <span>Send</span>
                                </motion.button>
                            )}
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}

function TypingDots() {
    return (
        <div className="flex items-center">
            {[1, 2, 3].map((dot) => (
                <motion.div
                    key={dot}
                    className="w-1 h-1 bg-white/90 rounded-full mx-0.5"
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                        opacity: [0.3, 0.9, 0.3],
                        scale: [0.85, 1.1, 0.85]
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot * 0.15,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
