import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  rating: number;
  students: string;
  duration: string;
  url: string;
  contents?: string[];
  category: "system" | "network";
  tags?: string[];
}

const systemProgrammingCourses: Course[] = [
  {
    id: 1,
    title: "Linux System Programming Techniques & Concepts",
    description: "For Developers - Build Linux Programmable Libraries, Makefiles, Memory Management, Compilation and Linking, C Programming",
    price: "$10",
    rating: 4.7,
    students: "11k",
    duration: "15h",
    url: "https://www.csepracticals.com/alpc/",
    category: "system",
    tags: ["C/C++", "Linux", "Makefile", "Memory"],
    contents: [
      "Learn Advance Programming Concepts in C/C++",
      "Automate Build Process using Makefile",
      "Static and Dynamic Libraries and Linking",
      "Organize the code into Header and Source files",
      "Stack Memory, Stack overflow, Stack Corruption, Stack Registers",
      "Compilation Process of a GCC Compiler",
      "Understanding Memory allocations, Heap Memory Management, Memory Leaks",
      "Paging Concepts and Page Tables",
      "Glue Based Data Structures",
      "Machine Endian-ness",
      "Bit-Programming",
      "Timers, TLVs, (De)Serialization"
    ]
  },
  {
    id: 2,
    title: "Linux IPC Project : Develop Asynchronous PUB-SUB System",
    description: "Inter-Process-Communication, Linux Dev Project, IPC, Distributed System, Socket Programming, C/C++ Project, Linux Course",
    category: "system",
    price: "$10",
    rating: 4.0,
    students: "105",
    duration: "4h",
    url: "https://www.csepracticals.com/pub-sub-system/",
    tags: ["IPC", "Sockets", "Async", "Project"],
    contents: [
      "Design Application which require IPC", 
      "Prepare for IPC based interview Questions", 
      "Understand (Un)Subscription Model", 
      "Various IPC Methods", 
      "Centralised Message Distribution"]
  },
  {
    id: 3,
    title: "Part A - Multithreading and Thread Synchronization ( Pthreads )",
    description: "Linux Posix Threads ( pthreads ), thread synchronization, Operating System Concepts, C/C++ Programming with Projects",
    category: "system",
    price: "$10",
    rating: 4.8,
    students: "7.3k",
    duration: "17h",
    url: "https://www.csepracticals.com/mt/",
    tags: ["Pthreads", "Mutex", "Sync", "C/C++"],
    contents: [
      "Mutual Exclusion Vs Atomocity", 
      "Writing Thread Safe Codes", 
      "Signaling and Wait", 
      "Thread Synchronization Techniques", 
      "Mutexes, Semaphores",
      "Spin-Locks",
      "Inter-thread Communication",
      "Notification-Chains",
      "Thread-Cancellation",
      "Condition-Variables",
      "Deadlock Handling"
    ]
  },
  {
    id: 4,
    title: "Asynchronous Programming Design Patterns - C/C++",
    description: "System Programming, C/C++, Multithreading Concepts, Thread Synchronization, Operating System Project Courses, Event Loops",
    category: "system",
    price: "$10",
    rating: 4.5,
    students: "2k",
    duration: "7h",
    url: "https://www.csepracticals.com/async/",
    tags: ["Async", "Events", "Patterns", "C/C++"],
    contents: [
      "Writing a Computation Scheduler", 
      "Designing and Implementing Asynchronous Software's", 
      "Event Loop Design and Implementation", 
      "How to Communicate in an Asynchronous way", 
      "Reducing Multithreaded Application to Single Threaded",
      "Implementing Concurrency in a Single Threaded Applications",
      "Implementing blocking and Non-Blocking Calls",
      "Prevent Object Premature Deletion in Async-Programming",
      "Serializing Timers",
      "Controlled Preemption & Scheduling",
      "Task-Prioritization"
    ]
  },
  {
    id: 5,
    title: "Build Remote Procedure Calls (RPC) - from Scratch in C",
    description: "System Programming Projects - Server Client RPC Model over a Network Sockets, Data Serialization - Windows/Linux",
    category: "system",
    price: "$10",
    rating: 4.5,
    students: "2.2k",
    duration: "6h",
    url: "https://www.csepracticals.com/rpc/",
    tags: ["RPC", "Sockets", "Serialize", "Project"],
    contents: [
      "Build Remote procedure Calls", 
      "manipulate data objects as stream of bytes", 
      "concept of Data Serialization and DeSerialization", 
      "data transmission between heterogeneous machines"
    ]
  },
  {
    id: 6,
    title: "System Project : Programming Finite State Machine",
    description: "C/C++ Projects, Library Design, System Projects, Programming based Course, Data Structures and Algorithms, Automata, TOC",
    category: "system",
    price: "$10",
    rating: 4.3,
    students: "1.2k",
    duration: "3h",
    url: "https://www.csepracticals.com/fsm/",
    contents: [
      "Principles of Designing a Programmable and Robust Library", 
      "Pattern Matching, Validatation and Computation", 
      "Use of Function Pointers and Callbacks", 
      "Implement Mealey/Moore Machines"
    ]
  },
  {
    id: 7,
    title: "Linux Inter Process Communication (IPC) from Scratch in C",
    description: "Linux Course - Includes Socket Programming, Linux System Programming, C programming - From Beginner to Expert",
    category: "system",
    price: "$10",
    rating: 4.6,
    students: "9.4k",
    duration: "8.5h",
    url: "https://www.csepracticals.com/ipc/",
    contents: [
      "Linux IPC programming interface", 
      "Prepare for IPC based interview Questions", 
      "Shared Memory", 
      "Signals", 
      "MshQ and Sockets"]
  },
  {
    id: 8,
    title: "Linux Timers Implementation & Design in C",
    description: "Data Structure & Algorithm to Schedule future events, Linux System Programming, Operating systems, C/C++ programming",
    category: "system",
    price: "$10",
    rating: 4.6,
    students: "1.8k",
    duration: "4.0h",
    url: "https://www.csepracticals.com/timers/",
    contents: [
      "Design and Implementing Timers", 
      "Solve concurrency problem with Timers", 
      "Develop Timer Library", 
      "Develop Scalable and hierarchical Timers"
    ]
  },
  {
    id: 9,
    title: "Part B (ADVANCE) - Multithreading Design Patterns ( Pthreads )",
    description: "Linux Posix Threads ( pthreads ), thread synchronization, Operating System Concepts, C/C++ Programming with Projects",
    category: "system",
    price: "$10",
    rating: 4.6,
    students: "2.3k",
    duration: "8.5h",
    url: "https://www.csepracticals.com/mtb/",
    contents: [
      "Advanced Multithreading Concepts", 
      "Thread Pools, Wait Queues",
      "Barriers, Monitors, Assembly Line", 
      "Writing Thread Safe Codes", 
      "Monitors, Barriers, WaitQueues, Assembly line",
      "Implement Own Spin-Locks", 
      "Implement Own Read-Write Locks",
      "Bridge Problem, Dining Philosopher Problem"
      ]
  },
  {
    id: 10,
    title: "Writing Parsers in C++ ( for MathExpressions / SQL etc )",
    description: "C++ projects, SQL Query parser, Advanced Math Expression Parsers, C/C++ project, CFG Grammar implementation",
    category: "system",
    price: "$10",
    rating: 4.5,
    students: "397",
    duration: "7.5h",
    url: "https://www.csepracticals.com/mexpr/",
    contents: [
      "Writing Parsers", 
      "Parser for SQL Queries", 
      "Calculation of Complex mathematical expressions", 
      "Implementing Grammars in C/C++",
      "Apply OOPs Concepts",
      "Design Custom Math Operators"
    ]
  },
  {
    id: 11,
    title: "Operating System Project - Develop Heap Memory Manager in C",
    description: "Operating System UG/PG Seminar Projects in C on Windows/Linux Platforms, Memory Management, System Programming, Linux.",
    category: "system",
    price: "$10",
    rating: 4.4,
    students: "2.4k",
    duration: "7.5h",
    url: "https://www.csepracticals.com/mmgr/",
    contents: [
      "Understanding Heap Memory Management",
      "Catch Memory Leaks",
      "track the Objects malloc'd by the application",
      "See Memory Usage and statistics"
     ]
  },
  {
    id: 12,
    title: "Project : Implement SQL-RDBMS from Scratch in C/C++",
    description: "Project Development in C/C++, System Programming, Implement Postgresql clone, SQL-Parser, B+ Tree, Query Execution Plan",
    category: "system",
    price: "$10",
    rating: 4.8,
    students: "380",
    duration: "8h",
    url: "https://www.csepracticals.com/rdbms/",
    contents: [
      "Write (SQL) Parsers using Lexical Analyzer Tool", 
      "Implement RDBMS internals", 
      "Parse various SQL queries", 
      "Parse and evaluate Expressions", 
      "Advance Data Structures such as B+Trees , Hashtables", 
      "Implement SQL query Execution Plan",
      "Implement Where, Having, Group by Clauses",
      "Implement Aggregate functions"
    ]
  },
  {
    id: 13,
    title: "System C Project - Write a Garbage Collector from Scratch",
    description: "Linux/Windows System Programming - C Project, Heap Memory Leak detection tool, Operating System, Memory Management",
    category: "system",
    price: "$10",
    rating: 4.3,
    students: "2.5k",
    duration: "4.0h",
    url: "https://www.csepracticals.com/gc/",
    contents: [
      "Developing a C/C++ Library", 
      "Implement Memory Leak Detector tool", 
      "Find Leaked objects During program execution"
    ]
  },
  {
    id: 15,
    title: "C/C++ : Start Using Timer Library in Just 30 Minutes !",
    description: "Linux Operating system, Integrate Timer Library with C/C++ Programs in 30 Minutes, System Programming, Multithreading",
    category: "system",
    price: "FREE",
    rating: 4.5,
    students: "981",
    duration: "1h",
    url: "https://www.csepracticals.com/course-detail/c-c-start-using-timer-library-in-just-30-minutes-/6471/",
    contents: [
      "Integrating POSIX based Timer library with C/C++ projects and applications", 
      "Firing and Scheduling Application Events using Timer Library", 
      "Implement Timer based Algorithms"
    ]
  },
  {
    id: 16,
    title: "Learn Writing GNU Makefile in 30 minutes",
    description: "Makefile for C/C++ programs on Linux Platforms",
    category: "system",
    price: "FREE",
    rating: 4.2,
    students: "4.2k",
    duration: "1h",
    url: "https://www.csepracticals.com/course-detail/learn-writing-gnu-makefile-in-30-minutes/6473/",
    contents: [
      "Makefile Analogy - Dependency Tree"
    ]
  },
];

const networkingCourses: Course[] = [
  {
    id: 17,
    title: "Part 2 - Advance Networking Concepts",
    description: "NAT, PAT, DHCP, Tunneling, IP Fragmentation, ACLs, Route-Maps, Policy Based Routing, IPV6 Basics",
    category: "network",
    price: "$10",
    rating: 6.0,
    students: "84",
    duration: "4h",
    url: "https://www.csepracticals.com/nw2/",
    contents: [
      "NetWork Address Translation (NAT)", 
      "Port Address Translation (PAT)",
      "Twice NAT , Identity NAT",
      "Real World NAT Deployment Scenarios"
    ]
  },
  {
    id: 18,
    title: "Linux Kernel Programming - IPC Between Userspace and Kernel Space",
    description: "System Programing - Learn Netlink Sockets, Operating Systems, Loadable kernel Modules, C programming from scratch ",
    category: "network",
    price: "$10",
    rating: 4.5,
    students: "2.6k",
    duration: "3.0h",
    url: "https://www.csepracticals.com/netlink/",
    contents: [
      "Socket Programming", 
      "User Space to Kernel Communication",
      "TLV based Communication",
      "Event based notification from Kernel Space to User-space",
      "Multicast from Kernel Space to User Space"
    ]
  },
  {
    id: 19,
    title: "Master Class : TCP/IP Mechanics from Scratch to Expert",
    description: "Networking Course, UDP, TCP IP protocol Suite, Flow and Congestion Control, CCNA and others, TCP/IP Complete Course",
    category: "network",
    price: "$10",
    rating: 4.5,
    students: "8.8k",
    duration: "9h",
    url: "https://www.csepracticals.com/tcp/",
    contents: [
      "Connection-Oriented and Connection-less state", 
      "TCP Internal functionality and Mechanism", 
      "TCP congestion control",
      "Flow control and Window Mechanism", 
      "Difference between Byte oriented and datagram oriented protocols", 
      "Understand TCP graphs"
    ]
  },
  {
    id: 20,
    title: "Part A - Networking Projects - Implement TCP/IP Stack in C",
    description: "C/C++ Linux Project, Network Socket Programming, Build TCP/IP Stack, Final Year Project, L2 & L3 Implementation in C",
    category: "network",
    price: "$10",
    rating: 4.4,
    students: "4.4k",
    duration: "14.5h",
    url: "https://www.csepracticals.com/tcp-stacka/",
    contents: [
      "Implement Layer 2/3 of TCP/IP Stack", 
      "Building Network Topology from Scratch", 
      "Timers, GLthreads, Library integration",
      "Makefile, Project modularization Techniques", 
      "This is 100% Coding Course with minimal Theory", 
      "Writing Custom CLI commands",
      "Implement Routing and Switching Algorithms",
      "Implement Vlan-based Routing"
    ]
  },
  {
    id: 21,
    title: "Part B - Networking Projects - Implement TCP/IP Stack in C",
    description: "C/C++ Linux Project, Network Socket Programming, Build TCP/IP Stack, Final Year Project, L2 & L3 Implementation in C",
    category: "network",
    price: "$10",
    rating: 4.7,
    students: "1.7k",
    duration: "8.5h",
    url: "https://www.csepracticals.com/tcp-stackb/",
    contents: [
      "Implement Layer 2/3 of TCP/IP Stack", 
      "Building Network Topology from Scratch", 
      "Timers, GLthreads, Library integration",
      "Makefile, Project modularization Techniques", 
      "This is 100% Coding Course with minimal Theory", 
      "Writing Custom CLI commands",
      "Implement Routing and Switching Algorithms",
      "Implement Vlan-based Routing"
    ]
  },
  {
    id: 22,
    title: "Part A - Network Protocol Development in C ( from scratch )",
    description: "Network Coding Project for Network Core Developers, Linux, System Programming, Operating systems, Projects in C/C++",
    category: "network",
    price: "$10",
    rating: 4.6,
    students: "1.4k",
    duration: "12.5h",
    url: "https://www.csepracticals.com/proto-deva/",
    contents: [
      "Understand how Network Protocols are implemented on Network Devices", 
      "Packet processing", 
      "Implement complex protocol state machines", 
      "Implement complex Network Algorithms", 
      "experience of end-to-end implementation of a typical network protocol"
    ]
  },
  {
    id: 23,
    title: "Part B - Network Protocol Development in C ( from scratch )",
    description: "Network Coding Project for Network Core Developers, Linux, System Programming, Operating systems, Projects in C/C++",
    category: "network",
    price: "$10",
    rating: 4.8,
    students: "859",
    duration: "8.5h",
    url: "https://www.csepracticals.com/nw_proto_dev_partb/",
    contents: [
      "Understand how Network Protocols are implemented on Network Devices", 
      "Packet processing", 
      "Implement complex protocol state machines", 
      "Implement complex Network Algorithms", 
      "experience of end-to-end implementation of a typical network protocol"
    ]
  },
  {
    id: 24,
    title: "Networking Concepts with Socket Programming - Academic Level",
    description: "Networking course with socket programming concepts in depth with TCP/UDP/HTTP Socket Programming for beginners to expert",
    category: "network",
    price: "$10",
    rating: 4.5,
    students: "11k",
    duration: "24h",
    url: "https://www.csepracticals.com/npfs/",
    contents: [
      "L2 and L3 Routing, Vlan based Routing", 
      "Writing TCP/UDP Servers in Linux environment",
      "Concept of Packet Encapsulation", 
      "Event based notification from Kernel Space to User-space", 
      "ARP, ICMP, DNS",
      "IP Subnet, Socket Programming",
      "L3 Forwarding, How Routing Protocol Works"
    ]
  },
  {
    id: 25,
    title: "Advanced TCP/IP Socket Programming in C/C++ ( Posix )",
    description: "Design Complex TCP Server, C/C++ Project, Multi-Threading, POSIX, Network Systems Programming, Linux OS based",
    category: "network",
    price: "$10",
    rating: 4.2,
    students: "1.5k",
    duration: "10h",
    url: "https://www.csepracticals.com/atcp/",
    contents: [
      "TCP Message Demarcation", 
      "TCP Server States", 
      "Implement Concurrent/Multithreaded TCP Server",
      "Handling Disconnection/Reconnection"
    ]
  },
  {
    id: 26,
    title: "Network Security - Implement L3 Routing Table & ACL in C/C++",
    description: "FireWall, Access Control Lists in C/C++, Bit Level Programming, Network Development/Distributed System/Embedded etc",
    category: "network",
    price: "FREE",
    rating: 4.7,
    students: "5.6k",
    duration: "2h",
    url: "https://www.csepracticals.com/course-detail/network-security-implement-l3-routing-table-acl-in-c-c/6489/",
    contents: [
      "Trie Data Structure Use in Designing Routing Table and Access Control List",
      "Longest Prefix Match based Route Lookup", 
      "Bit Level Advanced Programming", 
      "Build Library for Object Filtering based on Attribute Match"
    ]
  },
  {
    id: 27,
    title: "Understanding Domain Name System (DNS)",
    description: "Networking Course - Design, Architecture and how a DNS System works - Designed for Beginners and Graduate Students",
    category: "network",
    price: "FREE",
    rating: 4.5,
    students: "3.5k",
    duration: "2h",
    url: "https://www.csepracticals.com/course-detail/understanding-domain-name-system-dns/6461/",
    contents: [
      "DNS Architecture and Geographical Distribution", 
      "Hosting your Own website", 
      "DNS Resolver", 
      "Reverse DNS Query"
    ]
  },
];

interface CategorySectionProps {
  title: string;
  courses: Course[];
  icon: string;
}

function CategorySection({ title, courses, icon }: CategorySectionProps) {
  const [showAll, setShowAll] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedCourses, setExpandedCourses] = useState<Set<number>>(new Set());
  const coursesPerSlide = 6;
  const totalSlides = Math.ceil(courses.length / coursesPerSlide);
  const initialMobileCourses = 4;

  const toggleCourse = (courseId: number) => {
    const newExpanded = new Set(expandedCourses);
    if (newExpanded.has(courseId)) {
      newExpanded.delete(courseId);
    } else {
      newExpanded.add(courseId);
    }
    setExpandedCourses(newExpanded);
  };

  const displayedMobileCourses = showAllMobile ? courses : courses.slice(0, initialMobileCourses);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("right"); // New content will slide in from right
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setTimeout(() => {
        setSlideDirection(null);
        setIsAnimating(false);
      }, 750);
    }, 50);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("left"); // New content will slide in from left
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setTimeout(() => {
        setSlideDirection(null);
        setIsAnimating(false);
      }, 750);
    }, 50);
  };

  const currentSliderCourses = courses.slice(
    currentSlide * coursesPerSlide,
    (currentSlide + 1) * coursesPerSlide
  );

  // Light, vibrant colors with better variety - static mapping
  const getColorClasses = (index: number) => {
    const colorIndex = index % 4;
    switch (colorIndex) {
      case 0:
        return {
          card: "border-rose-400/70 hover:border-rose-500 hover:bg-rose-500/5 shadow-rose-400/30 hover:shadow-rose-500/60",
          leftBorder: "border-rose-400/70"
        };
      case 1:
        return {
          card: "border-amber-400/70 hover:border-amber-500 hover:bg-amber-500/5 shadow-amber-400/30 hover:shadow-amber-500/60",
          leftBorder: "border-amber-400/70"
        };
      case 2:
        return {
          card: "border-teal-400/70 hover:border-teal-500 hover:bg-teal-500/5 shadow-teal-400/30 hover:shadow-teal-500/60",
          leftBorder: "border-teal-400/70"
        };
      case 3:
      default:
        return {
          card: "border-violet-400/70 hover:border-violet-500 hover:bg-violet-500/5 shadow-violet-400/30 hover:shadow-violet-500/60",
          leftBorder: "border-violet-400/70"
        };
    }
  };

  return (
    <div className="mb-16">
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-3xl font-bold text-foreground">{title}</h3>
      </div>

      {/* Desktop - Slider with vibrant colors */}
      <div className="hidden md:block">
        {!showAll ? (
          <>
            {/* Slider View */}
            <div className="relative overflow-hidden px-2">
              <div 
                className={`grid grid-cols-6 gap-6 ${
                  slideDirection === "left" ? "animate-slide-in-from-left" : 
                  slideDirection === "right" ? "animate-slide-in-from-right" : 
                  ""
                }`}
              >
                {currentSliderCourses.map((course, index) => (
                  <div key={course.id} className="relative group/card">
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <Card
                        className={`group overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:scale-[0.9] h-full flex flex-col ${getColorClasses(index).card}`}
                      >
                        <div className="relative p-3 bg-gradient-to-b from-accent/5 to-transparent">
                          {/* Price Badge */}
                          <div className="absolute top-2 right-2 z-20">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                              <div className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-white px-2.5 py-1 rounded-lg text-base font-black shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                                {course.price}
                              </div>
                            </div>
                          </div>
                          
                          {/* Category Badge */}
                          <div className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md ${
                            course.category === "system"
                              ? "bg-blue-500/90 text-white"
                              : "bg-cyan-500/90 text-white"
                          }`}>
                            {course.category === "system" ? "System" : "Network"}
                          </div>
                        </div>

                        <CardContent className="p-3 pt-0 flex-1 flex flex-col">
                          <h4 className="text-sm font-bold mb-1.5 line-clamp-2 min-h-[2.4rem] text-foreground group-hover:text-primary transition-colors leading-tight">
                            {course.title}
                          </h4>
                          <p className="text-xs text-muted-foreground/80 mb-3 line-clamp-2 min-h-[2rem] leading-relaxed">
                            {course.description}
                          </p>

                          {/* Stats - More Prominent */}
                          <div className="grid grid-cols-3 gap-2 mb-3">
                            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-400/20 border border-yellow-400/40 shadow-md">
                              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500 mb-1" />
                              <span className="font-black text-sm text-yellow-700 dark:text-yellow-300">{course.rating}</span>
                              <span className="text-[9px] text-muted-foreground">Rating</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-blue-400/20 to-cyan-400/20 border border-blue-400/40 shadow-md">
                              <Users className="w-4 h-4 text-blue-600 dark:text-blue-400 mb-1" />
                              <span className="font-black text-sm text-blue-700 dark:text-blue-300">{course.students}</span>
                              <span className="text-[9px] text-muted-foreground">Students</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-purple-400/20 to-pink-400/20 border border-purple-400/40 shadow-md">
                              <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400 mb-1" />
                              <span className="font-black text-sm text-purple-700 dark:text-purple-300">{course.duration}</span>
                              <span className="text-[9px] text-muted-foreground">Duration</span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-2 mt-auto">
                            {(course.tags || (course.category === "system" ? ["C/C++", "Linux", "System", "Projects"] : ["TCP/IP", "Sockets", "Protocols", "Network"])).slice(0, 4).map((tag, idx) => {
                              const colors = [
                                "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
                                "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
                                "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
                                "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
                              ];
                              return (
                                <span key={idx} className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${colors[idx % 4]}`}>
                                  {tag}
                                </span>
                              );
                            })}
                          </div>
                        </CardContent>

                        <CardFooter className="p-2 pt-0">
                          <Button
                            className="w-full bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary text-primary-foreground font-bold shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105 text-[11px] py-1.5"
                            size="sm"
                          >
                            Enroll Now →
                          </Button>
                        </CardFooter>
                      </Card>
                    </a>

                    {/* Hover Popup - Desktop Only */}
                    {course.contents && course.contents.length > 0 && (
                      <div className="absolute left-full ml-6 top-0 opacity-0 group-hover/card:opacity-100 transition-all duration-300 pointer-events-none z-50 hidden md:block">
                        <div className={`w-64 p-4 rounded-lg bg-card border-2 ${getColorClasses(index).card} shadow-2xl backdrop-blur-sm`}>
                          <h4 className="font-semibold mb-3 text-primary">Course Contents:</h4>
                          <ul className="space-y-2">
                            {course.contents.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="h-12 w-12 border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === currentSlide
                          ? "w-10 bg-primary"
                          : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="h-12 w-12 border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Showing {currentSlide * coursesPerSlide + 1}-
                {Math.min((currentSlide + 1) * coursesPerSlide, courses.length)} of{" "}
                {courses.length} courses
              </p>
            </div>

            {/* Show More Button */}
            <div className="text-center mt-8">
              <Button
                onClick={() => setShowAll(true)}
                size="lg"
                className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 text-primary-foreground px-8 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                Show All Courses ({courses.length} total)
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Full Grid View */}
            <div className="grid grid-cols-6 gap-6 px-2">
              {courses.map((course, index) => (
                <div key={course.id} className="relative group/card">
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card
                      className={`group overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:scale-[0.9] h-full flex flex-col ${getColorClasses(index).card}`}
                    >
                      <div className="relative p-3 bg-gradient-to-b from-accent/5 to-transparent">
                        {/* Price Badge */}
                        <div className="absolute top-2 right-2 z-20">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-white px-2.5 py-1 rounded-lg text-base font-black shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                              {course.price}
                            </div>
                          </div>
                        </div>
                        
                        {/* Category Badge */}
                        <div className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md ${
                          course.category === "system"
                            ? "bg-blue-500/90 text-white"
                            : "bg-cyan-500/90 text-white"
                        }`}>
                          {course.category === "system" ? "System" : "Network"}
                        </div>
                      </div>

                      <CardContent className="p-3 pt-0 flex-1 flex flex-col">
                        <h4 className="text-sm font-bold mb-1.5 line-clamp-2 min-h-[2.4rem] text-foreground group-hover:text-primary transition-colors leading-tight">
                          {course.title}
                        </h4>
                        <p className="text-xs text-muted-foreground/80 mb-3 line-clamp-2 min-h-[2rem] leading-relaxed">
                          {course.description}
                        </p>

                        {/* Stats - More Prominent */}
                        <div className="grid grid-cols-3 gap-2 mb-3">
                          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-400/20 border border-yellow-400/40 shadow-md">
                            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500 mb-1" />
                            <span className="font-black text-sm text-yellow-700 dark:text-yellow-300">{course.rating}</span>
                            <span className="text-[9px] text-muted-foreground">Rating</span>
                          </div>
                          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-blue-400/20 to-cyan-400/20 border border-blue-400/40 shadow-md">
                            <Users className="w-4 h-4 text-blue-600 dark:text-blue-400 mb-1" />
                            <span className="font-black text-sm text-blue-700 dark:text-blue-300">{course.students}</span>
                            <span className="text-[9px] text-muted-foreground">Students</span>
                          </div>
                          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-purple-400/20 to-pink-400/20 border border-purple-400/40 shadow-md">
                            <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400 mb-1" />
                            <span className="font-black text-sm text-purple-700 dark:text-purple-300">{course.duration}</span>
                            <span className="text-[9px] text-muted-foreground">Duration</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-2 mt-auto">
                          {(course.tags || (course.category === "system" ? ["C/C++", "Linux", "System", "Projects"] : ["TCP/IP", "Sockets", "Protocols", "Network"])).slice(0, 4).map((tag, idx) => {
                            const colors = [
                              "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
                              "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
                              "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
                              "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
                            ];
                            return (
                              <span key={idx} className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${colors[idx % 4]}`}>
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      </CardContent>

                      <CardFooter className="p-2 pt-0">
                        <Button
                          className="w-full bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary text-primary-foreground font-bold shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105 text-[11px] py-1.5"
                          size="sm"
                        >
                          Enroll Now →
                        </Button>
                      </CardFooter>
                    </Card>
                  </a>

                  {/* Hover Popup - Desktop Only */}
                  {course.contents && course.contents.length > 0 && (
                    <div className="absolute left-full ml-6 top-0 opacity-0 group-hover/card:opacity-100 transition-all duration-300 pointer-events-none z-50 hidden md:block">
                      <div className={`w-64 p-4 rounded-lg bg-card border-2 ${getColorClasses(index).card} shadow-2xl backdrop-blur-sm`}>
                        <h4 className="font-semibold mb-3 text-primary">Course Contents:</h4>
                        <ul className="space-y-2">
                          {course.contents.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Show Less Button */}
            <div className="text-center mt-8">
              <Button
                onClick={() => {
                  setShowAll(false);
                  setCurrentSlide(0);
                }}
                size="lg"
                variant="outline"
                className="px-8"
              >
                Show Less
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Mobile - Expandable List */}
      <div className="md:hidden">
        <div className="space-y-2">
          {displayedMobileCourses.map((course, index) => {
            const isExpanded = expandedCourses.has(course.id);
            
            return (
              <div
                key={course.id}
                className={`border-l-4 bg-card rounded-lg overflow-hidden transition-all ${
                  getColorClasses(index).leftBorder
                }`}
              >
                <button
                  onClick={() => toggleCourse(course.id)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-accent/5 transition-colors"
                >
                  <div className="flex-1 min-w-0 pr-3">
                    <h4 className="text-sm font-bold text-foreground break-words">
                      {course.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1.5 text-xs">
                      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-gradient-to-br from-yellow-400/20 to-orange-400/20 text-yellow-700 dark:text-yellow-300 border border-yellow-400/30">
                        <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                        <span className="font-bold">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-gradient-to-br from-blue-400/20 to-cyan-400/20 text-blue-700 dark:text-blue-300 border border-blue-400/30">
                        <Users className="w-3.5 h-3.5" />
                        <span className="font-bold">{course.students}</span>
                      </div>
                      <span className="font-black text-primary">{course.price}</span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-3 pb-3 space-y-3 border-t border-border/50">
                    <p className="text-sm text-muted-foreground pt-3">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-gradient-to-br from-purple-400/20 to-pink-400/20 text-purple-700 dark:text-purple-300 border border-purple-400/30">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="font-bold">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-gradient-to-br from-blue-400/20 to-cyan-400/20 text-blue-700 dark:text-blue-300 border border-blue-400/30">
                        <Users className="w-3.5 h-3.5" />
                        <span className="font-bold">{course.students}</span>
                      </div>
                    </div>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        size="sm"
                      >
                        Enroll Now - {course.price}
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {!showAllMobile && courses.length > initialMobileCourses && (
          <div className="mt-4 text-center">
            <Button
              onClick={() => setShowAllMobile(true)}
              variant="outline"
              className="w-full border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              Show More Courses ({courses.length - initialMobileCourses} more)
              <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
            </Button>
          </div>
        )}

        {showAllMobile && (
          <div className="mt-4 text-center">
            <Button
              onClick={() => setShowAllMobile(false)}
              variant="outline"
              className="w-full border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              Show Less
              <ChevronRight className="w-4 h-4 ml-1 -rotate-90" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CourseCards() {
  return (
    <section id="courses" className="py-16 px-6 bg-background">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Our Course Catalog
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive courses organized by specialization
          </p>
        </div>

        <CategorySection
          title="System Programming (15 Courses)"
          courses={systemProgrammingCourses}
          icon="⚙️"
        />

        <CategorySection
          title="Networking (11 Courses)"
          courses={networkingCourses}
          icon="🌐"
        />
      </div>
    </section>
  );
}
