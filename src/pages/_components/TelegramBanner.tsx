import { Button } from "@/components/ui/button.tsx";
import { MessageCircle, Users } from "lucide-react";

export default function TelegramBanner() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                Join Our Telegram Community
                <Users className="h-5 w-5 text-cyan-400" />
              </h3>
              <p className="text-sm text-muted-foreground">
                Connect with peers, get updates, and access exclusive resources
              </p>
            </div>
          </div>
          
          <div>
            <a
              href="https://t.me/telecsepracticals"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transition-all hover:scale-105"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Join Telegram Group
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
