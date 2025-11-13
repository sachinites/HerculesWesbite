import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

const milestones = [
  {
    step: 1,
    title: "Learn Linux System Programming",
    description: "Master fundamentals of Linux system calls, file I/O, and process management",
    content: [
      "System calls and APIs",
      "File I/O operations",
      "Process management",
      "Memory management",
      "Signals and IPC",
      "File system basics",
    ],
    colorClasses: {
      border: "border-primary/30 hover:border-primary",
      bg: "bg-primary",
      text: "text-primary",
      shadow: "shadow-primary/50 hover:shadow-primary/70",
      shadowXl: "hover:shadow-2xl hover:shadow-primary/50",
      lineBg: "bg-primary",
      lineShadow: "shadow-lg shadow-primary/50",
    },
  },
  {
    step: 2,
    title: "Multithreading in C / Asynchronous programming",
    description: "Deep dive into concurrent programming, thread synchronization, and async patterns",
    content: [
      "Thread creation & management",
      "Mutex and locks",
      "Condition variables",
      "Deadlock prevention",
      "Thread pools",
      "Async I/O patterns",
    ],
    colorClasses: {
      border: "border-chart-2/30 hover:border-chart-2",
      bg: "bg-chart-2",
      text: "text-chart-2",
      shadow: "shadow-chart-2/50 hover:shadow-chart-2/70",
      shadowXl: "hover:shadow-2xl hover:shadow-chart-2/50",
      lineBg: "bg-chart-2",
      lineShadow: "shadow-lg shadow-chart-2/50",
    },
  },
  {
    step: 3,
    title: "Build System Programming Projects",
    description: "Apply your skills to real-world system programming challenges",
    content: [
      "Custom shell implementation",
      "Process scheduler",
      "Memory allocator",
      "File system utilities",
      "System monitoring tools",
      "Daemon processes",
    ],
    colorClasses: {
      border: "border-accent/30 hover:border-accent",
      bg: "bg-accent",
      text: "text-accent",
      shadow: "shadow-accent/50 hover:shadow-accent/70",
      shadowXl: "hover:shadow-2xl hover:shadow-accent/50",
      lineBg: "bg-accent",
      lineShadow: "shadow-lg shadow-accent/50",
    },
  },
  {
    step: 4,
    title: "Kick start Developing Networking Projects",
    description: "Create network applications using sockets and protocols",
    content: [
      "Socket programming",
      "TCP/IP protocols",
      "Client-server architecture",
      "HTTP/HTTPS basics",
      "Network security",
      "Chat applications",
    ],
    colorClasses: {
      border: "border-chart-4/30 hover:border-chart-4",
      bg: "bg-chart-4",
      text: "text-chart-4",
      shadow: "shadow-chart-4/50 hover:shadow-chart-4/70",
      shadowXl: "hover:shadow-2xl hover:shadow-chart-4/50",
      lineBg: "bg-chart-4",
      lineShadow: "shadow-lg shadow-chart-4/50",
    },
  },
  {
    step: 5,
    title: "Advance System Programming/Networking Projects",
    description: "Build industry-level distributed systems and network architectures",
    content: [
      "Distributed systems",
      "Load balancers",
      "Message queues",
      "Database internals",
      "Container technology",
      "Production deployment",
    ],
    colorClasses: {
      border: "border-chart-5/30 hover:border-chart-5",
      bg: "bg-chart-5",
      text: "text-chart-5",
      shadow: "shadow-chart-5/50 hover:shadow-chart-5/70",
      shadowXl: "hover:shadow-2xl hover:shadow-chart-5/50",
      lineBg: "bg-chart-5",
      lineShadow: "shadow-lg shadow-chart-5/50",
    },
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="px-4 py-16 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-4">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">5-Step Journey</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Your Learning Roadmap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our structured path from basics to industry-level expertise
          </p>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Centered Layout */}
          <div className="space-y-4 md:space-y-6 w-full">
            {milestones.map((milestone, index) => {              
              return (
                <div
                  key={milestone.step}
                  className="relative animate-fade-in flex justify-center"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Connecting Line with Glow - Hidden on mobile */}
                  {index < milestones.length - 1 && (
                    <div
                      className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-6 ${milestone.colorClasses.lineBg} ${milestone.colorClasses.lineShadow}`}
                    />
                  )}

                  <div className={`group relative flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border-2 ${milestone.colorClasses.border} transition-all ${milestone.colorClasses.shadowXl} hover:scale-[1.02] w-full md:max-w-2xl`}>
                    <div className="flex-shrink-0 relative">
                      <div className={`absolute inset-0 ${milestone.colorClasses.bg} rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity`} />
                      <div className={`relative flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full ${milestone.colorClasses.bg} text-primary-foreground font-bold text-lg md:text-xl shadow-lg ${milestone.colorClasses.shadow}`}>
                        {milestone.step}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2 flex items-center gap-2">
                        <span className="break-words">{milestone.title}</span>
                        <ArrowRight className={`hidden md:block h-5 w-5 ${milestone.colorClasses.text} opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 flex-shrink-0`} />
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">{milestone.description}</p>
                    </div>
                    <CheckCircle2 className={`hidden md:block h-6 w-6 ${milestone.colorClasses.text} opacity-30 group-hover:opacity-100 flex-shrink-0 transition-all`} />

                    {/* Hover Popup - Desktop Only */}
                    <div className="hidden md:block absolute left-full ml-6 top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                      <div className={`w-64 p-4 rounded-lg bg-card border-2 ${milestone.colorClasses.border} shadow-2xl ${milestone.colorClasses.shadowXl} backdrop-blur-sm`}>
                        <h4 className={`font-semibold mb-3 ${milestone.colorClasses.text}`}>Content Covered:</h4>
                        <ul className="space-y-2">
                          {milestone.content.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className={`mt-1 h-1.5 w-1.5 rounded-full ${milestone.colorClasses.bg} flex-shrink-0`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
