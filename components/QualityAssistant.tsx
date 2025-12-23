
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { X, Send, Bot, User, Loader2, Mic } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const QualityAssistant: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello Dr. Abdulilah. I am your Qnet AI assistant. How can I help you with quality metrics, QI projects, or accreditation readiness today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: input,
        config: {
          systemInstruction: "You are the Qnet Quality Assistant, a sophisticated AI for a healthcare quality management platform. Your tone is professional, helpful, and data-driven. You assist users (like Dr. Abdulilah) in navigating the Qnet platform which includes KPIs, QI Projects, Academy, Accreditations, and Media. If asked about platform features, refer to the Information Architecture provided (e.g., KPI Dashboard, Project Library, Academy Catalog). Keep answers concise and focused on healthcare quality excellence.",
        },
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.text || "I'm sorry, I couldn't process that request." }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I encountered an error connecting to the intelligence module. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed top-0 right-0 w-full md:w-96 h-full bg-white shadow-2xl z-[60] flex flex-col animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Bot size={20} />
          </div>
          <div>
            <h3 className="font-bold text-sm">Quality Assistant</h3>
            <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> AI Powered
            </span>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <X size={20} />
        </button>
      </div>

      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
              ? 'bg-blue-600 text-white rounded-tr-none' 
              : 'bg-white border border-slate-100 text-slate-800 shadow-sm rounded-tl-none'
            }`}>
              <div className="flex items-center gap-2 mb-1 opacity-50 text-[10px] font-bold uppercase tracking-widest">
                {msg.role === 'user' ? <User size={10} /> : <Bot size={10} />}
                {msg.role === 'user' ? 'Dr. Abdulilah' : 'Qnet AI'}
              </div>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2 text-slate-400 text-sm">
              <Loader2 size={16} className="animate-spin" />
              Processing request...
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="relative flex items-center gap-2">
          <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
            <Mic size={20} />
          </button>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about quality..." 
            className="flex-1 bg-slate-100 border-none rounded-xl py-2 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-400 mt-4">
          Qnet AI may provide information that should be verified against official policies.
        </p>
      </div>
    </div>
  );
};

export default QualityAssistant;
