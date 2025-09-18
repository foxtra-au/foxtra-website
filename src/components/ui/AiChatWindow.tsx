"use client";

import { useEffect, useRef, useCallback, useTransition } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    SendIcon,
    XIcon,
    LoaderIcon,
    Sparkles,
    MessageCircle,
    Clock,
    DollarSign,
    Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react"

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

interface QuickQuestion {
    icon: React.ReactNode;
    question: string;
    category: string;
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
    const [messages, setMessages] = useState<Array<{id: string, text: string, isUser: boolean}>>([]);
    
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 50,
        maxHeight: 120,
    });

    const quickQuestions: QuickQuestion[] = [
        { 
            icon: <MessageCircle className="w-4 h-4" />, 
            question: "What services do you offer?", 
            category: "Services" 
        },
        { 
            icon: <DollarSign className="w-4 h-4" />, 
            question: "How much does it cost?", 
            category: "Pricing" 
        },
        { 
            icon: <Clock className="w-4 h-4" />, 
            question: "How long does setup take?", 
            category: "Timeline" 
        },
        { 
            icon: <Calendar className="w-4 h-4" />, 
            question: "Schedule a demo", 
            category: "Demo" 
        },
    ];

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (value.trim()) {
                handleSendMessage();
            }
        }
    };

    const handleSendMessage = (customMessage?: string) => {
        const messageText = customMessage || value.trim();
        if (messageText) {
            const userMessage = {
                id: Date.now().toString(),
                text: messageText,
                isUser: true
            };
            
            setMessages(prev => [...prev, userMessage]);
            setValue("");
            adjustHeight(true);
            
            startTransition(() => {
                setIsTyping(true);
                setTimeout(() => {
                    const aiResponse = {
                        id: (Date.now() + 1).toString(),
                        text: getAIResponse(messageText),
                        isUser: false
                    };
                    setMessages(prev => [...prev, aiResponse]);
                    setIsTyping(false);
                }, 2000);
            });
        }
    };

    const getAIResponse = (question: string): string => {
        const lowerQuestion = question.toLowerCase();
        
        if (lowerQuestion.includes('service') || lowerQuestion.includes('offer')) {
            return "We offer AI chat agents, voice agents, custom development, and marketing automation. Our solutions help businesses automate customer interactions and scale operations efficiently.";
        } else if (lowerQuestion.includes('cost') || lowerQuestion.includes('price') || lowerQuestion.includes('much')) {
            return "Our AI chat agents start at $299/month with 1,000 conversations included. Custom development projects begin at $5,000. We offer flexible pricing based on your specific needs.";
        } else if (lowerQuestion.includes('setup') || lowerQuestion.includes('long') || lowerQuestion.includes('time')) {
            return "Most AI agents can be deployed within 24-48 hours. This includes integration with your systems, training on your content, and testing. We'll have you up and running quickly!";
        } else if (lowerQuestion.includes('demo') || lowerQuestion.includes('schedule') || lowerQuestion.includes('meeting')) {
            return "I'd be happy to schedule a demo! You can book a 30-minute call with our team to see the AI agent in action and discuss your specific use case. Would you like me to send you a calendar link?";
        } else {
            return "Thanks for your question! Our AI agents can help with customer support, lead qualification, appointment booking, and more. Would you like to know more about any specific service?";
        }
    };
    
    const selectQuickQuestion = (question: string) => {
        handleSendMessage(question);
    };

    return (
        <div className="w-full h-full flex flex-col bg-transparent text-white relative">
            <div className="flex-1 flex flex-col max-w-lg mx-auto w-full">
                <motion.div 
                    className="relative z-10 space-y-6"
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
                                Try Our AI Chat Agent
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
                            Ask a question or try a quick prompt
                        </motion.p>
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
                                        "flex",
                                        message.isUser ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div className={cn(
                                        "max-w-[80%] p-3 rounded-lg text-sm",
                                        message.isUser 
                                            ? "bg-white text-black ml-4" 
                                            : "bg-white/10 text-white/90 mr-4"
                                    )}>
                                        {message.text}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        
                        {/* Typing indicator */}
                        <AnimatePresence>
                            {isTyping && (
                                <motion.div 
                                    className="flex justify-start"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <div className="bg-white/10 text-white/90 mr-4 p-3 rounded-lg flex items-center gap-2">
                                        <span className="text-sm">AI is typing</span>
                                        <TypingDots />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Input Area */}
                    <motion.div 
                        className="relative backdrop-blur-xl bg-white/[0.05] rounded-xl border border-white/[0.1] shadow-lg"
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

                        <div className="p-3 border-t border-white/[0.1] flex items-center justify-end">
                            <motion.button
                                type="button"
                                onClick={() => handleSendMessage()}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isTyping || !value.trim()}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                                    "flex items-center gap-2",
                                    value.trim()
                                        ? "text-white shadow-lg"
                                        : "bg-white/[0.05] text-white/40"
                                )}
                                style={value.trim() ? { backgroundColor: '#FF335C' } : {}}
                            >
                                {isTyping ? (
                                    <LoaderIcon className="w-4 h-4 animate-spin" />
                                ) : (
                                    <SendIcon className="w-4 h-4" />
                                )}
                                <span>Send</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Quick Questions */}
                    <div className="grid grid-cols-2 gap-2">
                        {quickQuestions.map((question, index) => (
                            <motion.button
                                key={question.question}
                                onClick={() => selectQuickQuestion(question.question)}
                                className="flex items-center gap-2 px-3 py-2 bg-white/[0.03] hover:bg-white/[0.08] rounded-lg text-sm text-white/70 hover:text-white/90 transition-all text-left group"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.4 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="text-white/60 group-hover:text-white/80 transition-colors">
                                    {question.icon}
                                </div>
                                <span className="text-xs leading-tight">{question.question}</span>
                            </motion.button>
                        ))}
                    </div>
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
