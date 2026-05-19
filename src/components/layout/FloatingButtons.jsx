import { MessageSquare, Send } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Telegram Button */}
      <button 
        className="w-14 h-14 bg-[#24A1DE] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1f8cbd] hover:scale-105 transition-all focus:outline-none" 
        aria-label="Telegram Support"
      >
        <Send className="w-6 h-6 ml-[-2px] mt-[2px]" />
      </button>
      
      {/* Live Chat Button */}
      <button 
        className="w-14 h-14 bg-[#246BFD] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 hover:scale-105 transition-all focus:outline-none" 
        aria-label="Open Chat"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
      
      {/* TODO: Connect real chat functionality later (e.g., crisp.js) */}
    </div>
  );
}
