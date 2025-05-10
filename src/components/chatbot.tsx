import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I help you with SoftSell today?" }
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { sender: "user", text: input.trim() }]);

            setInput("");

            setTimeout(() => {
                const botResponses = [
                    "Thanks for your message! Our team will get back to you soon.",
                    "I understand you're interested in software license resale. Can you tell me more?",
                    "SoftSell helps you turn unused software licenses into cash. How can we help you today?",
                    "That's a great question! We specialize in helping businesses monetize their unused software licenses."
                ];

                const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
                setMessages(prev => [...prev, { sender: "bot", text: randomResponse }]);
            }, 1000);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed right-6 bottom-6 p-4 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full shadow-lg z-50"
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>

            {isOpen && (
                <div className="fixed bottom-20 right-6 w-80 sm:w-96 h-96 backdrop-blur-lg border border-green-400/20 rounded-lg shadow-xl overflow-hidden flex flex-col z-50">
                    <div className="p-4 bg-gradient-to-r from-green-400/20 to-emerald-600/20 border-b border-green-400/20">
                        <h3 className="font-bold">SoftSell Support</h3>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 bg-transparent">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`mb-3 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`p-3 rounded-lg max-w-[80%] ${message.sender === "user"
                                        ? "bg-green-500 text-white rounded-br-none"
                                        : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-bl-none"}`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}

                        {messages.length === 1 && (
                            <div className="mt-4 space-y-2">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Suggested questions:</p>
                                {[
                                    "How do I sell my license?",
                                    "What types of licenses do you buy?",
                                    "How much can I get for my software?",
                                    "How long does the process take?"
                                ].map((question, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setMessages(prev => [
                                                ...prev,
                                                { sender: "user", text: question }
                                            ]);

                                            setTimeout(() => {
                                                const responses: { [key: string]: string } = {
                                                    "How do I sell my license?": "Selling your license is easy! Simply register on our platform, submit your license details for valuation, and once approved, we'll handle the payment and transfer process.",
                                                    "What types of licenses do you buy?": "We purchase a wide range of software licenses including Adobe Creative Cloud, Microsoft Office, AutoCAD, and many enterprise software solutions. Even if yours isn't listed, reach out and we'll evaluate it!",
                                                    "How much can I get for my software?": "The value depends on several factors including the software type, subscription time remaining, and current market demand. Our valuation tool provides an instant estimate - typically 40-70% of the original price.",
                                                    "How long does the process take?": "The entire process usually takes 2-5 business days. Verification takes 24-48 hours, and once approved, payment is processed within 1-3 business days."
                                                };

                                                setMessages(prev => [
                                                    ...prev,
                                                    { sender: "bot", text: responses[question] || "Thanks for your question! Our team will get back to you soon." }
                                                ]);
                                            }, 1000);
                                        }}
                                        className="block w-full text-left px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 border-t border-green-400/20 bg-background">
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type your message..."
                                className="flex-1 p-2 border border-green-400/30 rounded-l-md focus:outline-none focus:border-green-400 bg-transparent"
                            />
                            <Button
                                onClick={handleSendMessage}
                                className="rounded-l-none"
                                disabled={!input.trim()}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;