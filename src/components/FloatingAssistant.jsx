import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const FloatingAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Bienvenido. Soy su Asociado Digital. ¿En qué área legal requiere asistencia hoy?' }
    ]);
    const [inputText, setInputText] = useState('');

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        setMessages([...messages, { type: 'user', text: inputText }]);
        setInputText('');

        // Simulate response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                type: 'bot',
                text: 'Gracias por su consulta. Para brindarle una atención personalizada, ¿podría indicarme si busca asesoría corporativa o particular?'
            }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white w-80 md:w-96 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mb-4"
                    >
                        {/* Header */}
                        <div className="bg-vinotinto p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <span className="font-serif font-bold italic">AD</span>
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-sm">Asociado Digital</h3>
                                    <p className="text-xs text-white/70">En línea</p>
                                </div>
                            </div>
                            <button onClick={toggleChat} className="text-white/80 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="h-80 bg-lightGray p-4 overflow-y-auto flex flex-col gap-3">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.type === 'user'
                                            ? 'bg-vinotinto text-white self-end rounded-br-none'
                                            : 'bg-white text-matteBlack border border-gray-200 self-start rounded-bl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
                            <input
                                type="text"
                                placeholder="Escriba su consulta..."
                                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-vinotinto transition-colors"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="w-10 h-10 bg-vinotinto text-white rounded-full flex items-center justify-center hover:bg-vinotinto/90 transition-colors"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleChat}
                className="w-16 h-16 bg-vinotinto text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl hover:shadow-vinotinto/30 transition-shadow group relative"
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}

                {!isOpen && (
                    <span className="absolute right-0 top-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                )}
            </motion.button>
        </div>
    );
};

export default FloatingAssistant;
