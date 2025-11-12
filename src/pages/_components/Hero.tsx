import { Button } from "@/components/ui/button.tsx";
import { Card } from "@/components/ui/card.tsx";
import { Terminal, Network, Code2, BookOpen, Gift, Clock, Infinity as InfinityIcon, Star } from "lucide-react";
import { useEffect, useState } from "react";

const codeSnippets = [
  "// Create TCP socket",
  "int sockfd = socket(AF_INET, SOCK_STREAM, 0);",
  "struct sockaddr_in server_addr;",
  "server_addr.sin_family = AF_INET;",
  "server_addr.sin_port = htons(8080);",
  "",
  "// Bind socket to port",
  "bind(sockfd, (struct sockaddr*)&server_addr, sizeof(server_addr));",
  "",
  "// Listen for connections",
  "listen(sockfd, SOMAXCONN);",
  "printf(\"Server listening on port 8080\\n\");",
  "",
  "// Accept client connection",
  "int client_fd = accept(sockfd, NULL, NULL);",
  "",
  "// Send data to client",
  "char *msg = \"Hello from server!\";",
  "send(client_fd, msg, strlen(msg), 0);",
  "",
  "// Receive data from client",
  "char buffer[1024] = {0};",
  "recv(client_fd, buffer, 1024, 0);",
  "printf(\"Received: %s\\n\", buffer);",
];

export default function Hero() {
  const [activeNode, setActiveNode] = useState(0);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [counts, setCounts] = useState({ paid: 0, free: 0, hours: 0, reviews: 0 });

  useEffect(() => {
    // Animate code typing - continuous loop
    let lineIndex = 0;
    const maxVisibleLines = 12;
    
    const interval = setInterval(() => {
      setCodeLines((prev) => {
        const newLines = [...prev, codeSnippets[lineIndex]];
        // Keep only the last maxVisibleLines
        return newLines.slice(-maxVisibleLines);
      });
      
      lineIndex = (lineIndex + 1) % codeSnippets.length;
    }, 600);

    // Animate network nodes
    const nodeInterval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 1000);

    // Animate counting stats
    const targetCounts = { paid: 25, free: 5, hours: 200, reviews: 6332 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = {
      paid: targetCounts.paid / steps,
      free: targetCounts.free / steps,
      hours: targetCounts.hours / steps,
      reviews: targetCounts.reviews / steps,
    };

    let step = 0;
    const countInterval = setInterval(() => {
      if (step < steps) {
        setCounts({
          paid: Math.min(Math.round(increment.paid * step), targetCounts.paid),
          free: Math.min(Math.round(increment.free * step), targetCounts.free),
          hours: Math.min(Math.round(increment.hours * step), targetCounts.hours),
          reviews: Math.min(Math.round(increment.reviews * step), targetCounts.reviews),
        });
        step++;
      } else {
        setCounts(targetCounts);
        clearInterval(countInterval);
      }
    }, duration / steps);

    return () => {
      clearInterval(interval);
      clearInterval(nodeInterval);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <section id="home" className="relative px-4 pt-0 pb-16 sm:px-6 lg:px-8 overflow-hidden min-h-[600px]">
      {/* Animated Stats Bar - Desktop Only */}
      <div className="hidden md:block relative z-20 animate-fade-in mb-12">
        <Card className="mx-4 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-amber-500/10 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm">
          <div className="grid grid-cols-5 divide-x divide-border/50">
            {/* Paid Courses */}
            <div className="p-6 text-center group hover:bg-cyan-500/5 transition-colors">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/40 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-1">
                    {counts.paid}+
                  </div>
                  <div className="text-sm text-muted-foreground">Paid Courses</div>
                </div>
              </div>
            </div>

            {/* Free Courses */}
            <div className="p-6 text-center group hover:bg-rose-500/5 transition-colors">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/40 group-hover:scale-110 transition-transform">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-rose-400 mb-1">
                    {counts.free}
                  </div>
                  <div className="text-sm text-muted-foreground">Free Courses</div>
                  <div className="text-xs text-rose-400/80 mt-1 font-medium">
                    Sign up required
                  </div>
                </div>
              </div>
            </div>

            {/* Hours of Content */}
            <div className="p-6 text-center group hover:bg-amber-500/5 transition-colors">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/40 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-400 mb-1">
                    {counts.hours}+
                  </div>
                  <div className="text-sm text-muted-foreground">Hours of Content</div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="p-6 text-center group hover:bg-emerald-500/5 transition-colors">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/40 group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-400 mb-1">
                    {counts.reviews.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Reviews</div>
                </div>
              </div>
            </div>

            {/* Lifetime Access */}
            <div className="p-6 text-center group hover:bg-violet-500/5 transition-colors">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-lg shadow-violet-500/40 group-hover:scale-110 transition-transform">
                  <InfinityIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-violet-400 mb-1">
                    Lifetime
                  </div>
                  <div className="text-sm text-muted-foreground">Access</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Simple Network Topology - Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Central Hub/Router */}
            <circle cx="400" cy="300" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-cyan-500">
              <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite" />
            </circle>
            
            {/* Nodes Around Center - Ring 1 */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const x = 400 + 150 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 150 * Math.sin((angle * Math.PI) / 180);
              return (
                <g key={`ring1-${i}`}>
                  {/* Connection Line */}
                  <line x1="400" y1="300" x2={x} y2={y} stroke="currentColor" strokeWidth="1.5" className="text-teal-500/40">
                    <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                  </line>
                  {/* Node */}
                  <circle cx={x} cy={y} r="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-500">
                    <animate attributeName="r" values="15;18;15" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              );
            })}
            
            {/* Outer Nodes - Ring 2 */}
            {[30, 90, 150, 210, 270, 330].map((angle, i) => {
              const x = 400 + 250 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 250 * Math.sin((angle * Math.PI) / 180);
              const x1 = 400 + 150 * Math.cos(((angle - 30) * Math.PI) / 180);
              const y1 = 300 + 150 * Math.sin(((angle - 30) * Math.PI) / 180);
              return (
                <g key={`ring2-${i}`}>
                  {/* Connection Line */}
                  <line x1={x1} y1={y1} x2={x} y2={y} stroke="currentColor" strokeWidth="1" className="text-amber-500/30">
                    <animate attributeName="stroke-opacity" values="0.1;0.4;0.1" dur="5s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                  </line>
                  {/* Node */}
                  <circle cx={x} cy={y} r="10" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-500">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Master{" "}
              <span className="text-cyan-400">System Programming</span>
              {" "}& {" "}
              <span className="text-amber-400">Network Development</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Build production-ready systems from the ground up
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all hover:scale-105"
              >
                Start Learning
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="border border-amber-500/50 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:scale-105"
              >
                View Courses
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30">
                <Terminal className="w-4 h-4 text-rose-400" />
                <span className="text-sm text-rose-400 font-medium">Linux Internals</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30">
                <Network className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-violet-400 font-medium">TCP/IP Stack</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30">
                <Code2 className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-teal-400 font-medium">C/C++ Expert</span>
              </div>
            </div>
          </div>

          {/* Right: Animated Diagrams */}
          <div className="relative hidden lg:block">
            {/* Network Diagram */}
            <div className="relative h-[400px] w-full">
              {/* Center Server */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/50">
                  <Network className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Surrounding Nodes */}
              {[0, 1, 2, 3].map((index) => {
                const angle = (index * 90) * (Math.PI / 180);
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                const getNodeClasses = (idx: number) => {
                  if (idx === 0) return {
                    line: "bg-cyan-500",
                    gradient: "bg-gradient-to-br from-cyan-500 to-blue-500"
                  };
                  if (idx === 1) return {
                    line: "bg-rose-500",
                    gradient: "bg-gradient-to-br from-rose-500 to-pink-500"
                  };
                  if (idx === 2) return {
                    line: "bg-teal-500",
                    gradient: "bg-gradient-to-br from-teal-500 to-emerald-500"
                  };
                  return {
                    line: "bg-violet-500",
                    gradient: "bg-gradient-to-br from-violet-500 to-purple-500"
                  };
                };

                const nodeClasses = getNodeClasses(index);
                const isActive = activeNode === index;

                return (
                  <div key={index}>
                    {/* Connection Line */}
                    <div
                      className={isActive ? `absolute top-1/2 left-1/2 h-0.5 origin-left transition-all duration-500 ${nodeClasses.line} opacity-70` : "absolute top-1/2 left-1/2 h-0.5 origin-left transition-all duration-500 bg-muted-foreground/20"}
                      style={{
                        width: `${radius}px`,
                        transform: `rotate(${index * 90}deg)`,
                      }}
                    />
                    
                    {/* Node */}
                    <div
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div
                        className={isActive ? `w-12 h-12 rounded-lg ${nodeClasses.gradient} flex items-center justify-center transition-all duration-500 scale-110 shadow-lg` : `w-12 h-12 rounded-lg ${nodeClasses.gradient} flex items-center justify-center transition-all duration-500 scale-100 opacity-50`}
                      >
                        <Terminal className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Code Terminal */}
              <div className="absolute bottom-0 right-0 w-[500px] bg-card/90 backdrop-blur-sm rounded-lg border border-border/50 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 px-4 py-2 border-b border-border/50 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-teal-500" />
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">network_server.c</div>
                </div>
                <div className="p-4 font-mono text-sm space-y-1 h-64 overflow-hidden">
                  {codeLines.map((line, idx) => (
                    <div key={`${idx}-${line}`} className="text-teal-400 animate-fade-in">
                      <span className="text-violet-400 mr-2">→</span> 
                      <span className={line.startsWith("//") ? "text-muted-foreground italic" : ""}>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
