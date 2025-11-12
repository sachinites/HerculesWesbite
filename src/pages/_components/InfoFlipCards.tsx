import { Card } from "@/components/ui/card.tsx";
import { Users, BookOpen } from "lucide-react";

export default function InfoFlipCards() {
  return (
    <section className="py-12 px-4 bg-background hidden md:block">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          {/* Flip Card 1: Who this website is for */}
          <div className="perspective-1000 h-[400px] flip-card">
            <div className="flip-card-inner">
              {/* Front Side */}
              <Card className="flip-card-front flex flex-col items-center justify-center p-8 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/20">
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    Who this website for?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Hover to see who can benefit
                  </p>
                </div>
              </Card>

              {/* Back Side */}
              <Card className="flip-card-back flex flex-col p-8 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/20 overflow-y-auto">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                  Exclusively for Developers
                </h3>
                <ul className="space-y-3 flex-1">
                  {[
                    "Network/Cloud Developers",
                    "Embedded Developers",
                    "Platform/Hardware Engineers",
                    "Linux & System Developers",
                    "Distributed Systems Developers",
                    "Kernel Developers",
                    "Device Driver Developers",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-foreground"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-500 flex-shrink-0" />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* Flip Card 2: Prerequisites */}
          <div className="perspective-1000 h-[400px] flip-card">
            <div className="flip-card-inner">
              {/* Front Side */}
              <Card className="flip-card-front flex flex-col items-center justify-center p-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/50 shadow-xl shadow-amber-500/20">
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/50">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-amber-400">
                    Pre-Requisites
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Hover to see requirements
                  </p>
                </div>
              </Card>

              {/* Back Side */}
              <Card className="flip-card-back flex flex-col p-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/50 shadow-xl shadow-amber-500/20 overflow-y-auto">
                <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">
                  Before You Start
                </h3>
                <ul className="space-y-4 flex-1">
                  {[
                    "Must know basic C or C++ or any programming language",
                    "Not a Data Structure and Algorithm Learning Site",
                    "Not a leet code or similar Website",
                    "Only for development projects for System programmers",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-foreground"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0" />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
