import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919686081839"; // +91-9686081839 in international format without symbols
  const message = "Hi! I'm interested in learning more about your courses.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 w-80 rounded-lg bg-card border-2 border-green-500 shadow-2xl shadow-green-500/30 animate-fade-in">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">CSEPracticals</h4>
                  <p className="text-white/80 text-xs">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-3">
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg border-l-4 border-green-500">
                <p className="text-sm text-foreground">
                  👋 Hi there! Have questions about our courses?
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Chat with us on WhatsApp for instant support!
                </p>
              </div>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-lg font-medium transition-all hover:scale-105 shadow-lg shadow-green-500/30"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat
              </a>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all hover:scale-110 animate-pulse"
          aria-label="Open WhatsApp Chat"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>
    </>
  );
}
