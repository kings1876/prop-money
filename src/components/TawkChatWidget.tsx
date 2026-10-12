import React from 'react';
import { MessageSquare, X, Send, Bot, User, Check, Sparkles } from 'lucide-react';

export const TawkChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'G’day! Welcome to Australia Prop Money live support. Need help with prop stacks, same-day dispatch cutoff, or RBA compliance?',
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = React.useState('');

  const quickQuestions = [
    'How fast is Australian shipping?',
    'Are these props 100% legal in Australia?',
    'What payment methods do you accept?',
    'Do you do bulk studio discounts?'
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessages = [...messages, { sender: 'user' as const, text, time }];
    setMessages(newMessages);
    if (!textToSend) setInputText('');

    // Automated smart assistant response
    setTimeout(() => {
      let botReply = "Thanks for your message! Our Sydney dispatch team is online. For urgent orders, orders placed before 2:00 PM AEST ship today via Australia Post Express.";
      const lower = text.toLowerCase();

      if (lower.includes('shipping') || lower.includes('fast') || lower.includes('delivery')) {
        botReply = "Tracked shipping is $12.95 AUD, free on orders over $150. Sydney, Melbourne & Brisbane metro typically arrive in 1-2 business days. Regional WA and NT take 2-4 business days.";
      } else if (lower.includes('legal') || lower.includes('rba') || lower.includes('crimes')) {
        botReply = "Yes, 100% compliant! All our props comply with the Crimes (Currency) Act 1981 and RBA rules. Every note is one-sided, 75% scale, and printed with large 'PROP COPY / NOT LEGAL TENDER' markings.";
      } else if (lower.includes('pay') || lower.includes('card') || lower.includes('invoice')) {
        botReply = "We accept Visa, Mastercard and Amex through our secure card checkout. Production companies can also request a tax invoice payable by EFT.";
      } else if (lower.includes('bulk') || lower.includes('custom') || lower.includes('briefcase')) {
        botReply = "For bulk orders, we offer tailored filmmaker volume pricing and custom branded production bands. Simply contact us with your shoot dates!";
      }

      setMessages(prev => [...prev, {
        sender: 'bot',
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-full shadow-2xl transition-all duration-200 cursor-pointer hover:scale-105"
          aria-label="Open Live Chat"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-slate-950" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-amber-400" />
          </div>
          <span className="text-xs font-semibold hidden sm:inline">
            Prop Help & Live Chat
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[480px] bg-[#0D1630] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-[#121B38] px-4 py-3 border-b border-slate-700/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center">
                  AU
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-slate-900" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Australia Prop Money Support</span>
                </h3>
                <span className="text-[10px] text-emerald-400">
                  Online · Sydney Dispatch Desk
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick FAQ questions pills */}
          <div className="p-2.5 bg-[#090E20] border-b border-slate-800 flex gap-1.5 overflow-x-auto text-[11px]">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white shrink-0 transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Message History */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-amber-400 shrink-0 flex items-center justify-center text-[10px] font-bold">
                    AU
                  </div>
                )}
                <div
                  className={`max-w-[78%] p-3 rounded-xl leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-amber-400 text-slate-950 rounded-br-none font-medium'
                      : 'bg-[#152042] text-slate-200 border border-slate-700/60 rounded-bl-none'
                  }`}
                >
                  <p>{m.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      m.sender === 'user' ? 'text-slate-800' : 'text-slate-400'
                    }`}
                  >
                    {m.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-2.5 bg-[#121B38] border-t border-slate-700/80">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-1.5"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about orders, delivery, compliance..."
                className="flex-1 bg-[#090E20] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
};
