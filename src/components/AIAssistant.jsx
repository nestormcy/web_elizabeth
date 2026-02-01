import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, X, Send } from 'lucide-react';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Hola, soy el asistente de la Dra. Elizabeth, ¿en qué puedo ayudarte hoy?',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = {
            role: 'user',
            content: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        // Simulation for now - API integration ready
        setTimeout(() => {
            const assistantMessage = {
                role: 'assistant',
                content: 'Gracias por tu consulta. Para brindarte una asesoría precisa sobre temas mercantiles, agrarios, civiles o corporativos, ¿podrías detallar un poco más tu caso? O si prefieres, puedo agendar una cita.',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, assistantMessage]);
            setIsLoading(false);
        }, 1500);

        /* 
        // TODO: Enable Real DeepSeek API
        try {
            const response = await fetch('YOUR_DEEPSEEK_API_ENDPOINT', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMessage] })
            });
            // ... handle response
        } catch (error) {
            // ... handle error
        } 
        */
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-burgundy to-darkWood rounded-full shadow-2xl flex items-center justify-center border-2 border-gold/40 hover:border-gold transition-all duration-300"
            >
                <Scale className="w-8 h-8 text-gold" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-gold/30"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-burgundy to-darkWood p-4 flex items-center justify-between relative overflow-hidden">
                            <div className="absolute inset-0 bg-wood-pattern opacity-20"></div>
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center border border-gold/40">
                                    <Scale className="w-5 h-5 text-gold" />
                                </div>
                                <div>
                                    <h3 className="text-white font-serif font-bold text-sm">Asistente Legal</h3>
                                    <p className="text-gold/80 text-xs">Dra. Elizabeth Páez</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="relative z-10 text-white/80 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-cream/30 space-y-4">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.role === 'user'
                                            ? 'bg-burgundy text-white'
                                            : 'bg-white border border-burgundy/10 text-gray-800'
                                            }`}
                                    >
                                        <p className="text-sm leading-relaxed">{message.content}</p>
                                        <span className={`text-xs mt-1 block ${message.role === 'user' ? 'text-white/60' : 'text-gray-400'
                                            }`}>
                                            {message.timestamp.toLocaleTimeString('es-ES', {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-burgundy/10 rounded-2xl px-4 py-3">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-burgundy/40 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-burgundy/40 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-burgundy/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-200">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Escribe tu consulta..."
                                    className="flex-1 px-4 py-2 border border-burgundy/20 rounded-full focus:outline-none focus:border-burgundy/40 text-sm bg-cream/30"
                                    disabled={isLoading}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={isLoading || !inputValue.trim()}
                                    className="w-10 h-10 bg-burgundy text-white rounded-full flex items-center justify-center hover:bg-darkWood transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-center leading-tight">
                                Asistente informativo basado en la trayectoria de la Dra. Páez. No constituye asesoría formal.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIAssistant;
