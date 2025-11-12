import { useState, useRef, useCallback } from "react";
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
}

const systemProgrammingCourses: Course[] = [
  {
    id: 1,
    title: "Linux System Programming Techniques & Concepts",
    description: "For Developers - Build Linux Programmable Libraries, Makefiles, Memory Management, Compilation and Linking, C Programming",
    price: "$49",
    rating: 4.4,
    students: "8,815",
    duration: "14h",
    url: "https://www.csepracticals.com/alpc/",
    category: "system",
    contents: [
      "Compilation and Linking Process",
      "Static vs Dynamic Libraries",
      "Creating Custom Libraries",
      "Makefiles and Build Systems",
      "Memory Management Techniques",
      "C Programming Best Practices",
      "Debugging and Profiling"
    ]
  },
  {
    id: 2,
    title: "Linux Kernel Development",
    description: "Advanced kernel programming and modules",
    category: "system",
    price: "$79",
    rating: 4.6,
    students: "2.8k",
    duration: "32h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Kernel Architecture", "Module Development", "Device Drivers", "Kernel Debugging", "System Calls"]
  },
  {
    id: 3,
    title: "Shell Scripting & Bash Programming",
    description: "Automate tasks with powerful shell scripts",
    category: "system",
    price: "$44",
    rating: 4.7,
    students: "6.4k",
    duration: "16h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Bash Basics", "Script Automation", "Text Processing", "Control Structures", "Advanced Scripting"]
  },
  {
    id: 4,
    title: "Python Programming for DevOps",
    description: "Automate your infrastructure with Python scripting",
    category: "system",
    price: "$54",
    rating: 4.6,
    students: "9.8k",
    duration: "22h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Python Fundamentals", "Automation Scripts", "API Integration", "Infrastructure as Code", "CI/CD Pipelines"]
  },
  {
    id: 5,
    title: "C Programming Deep Dive",
    description: "Master low-level system programming with C",
    category: "system",
    price: "$59",
    rating: 4.8,
    students: "7.2k",
    duration: "28h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["C Language Fundamentals", "Pointers & Memory", "Data Structures", "File I/O", "Advanced C Concepts"]
  },
  {
    id: 6,
    title: "Memory Management & Optimization",
    description: "Deep dive into memory architecture and optimization",
    category: "system",
    price: "$64",
    rating: 4.7,
    students: "4.5k",
    duration: "20h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Virtual Memory", "Memory Allocation", "Cache Optimization", "Memory Leaks Detection", "Performance Profiling"]
  },
  {
    id: 7,
    title: "Process & Thread Management",
    description: "Master concurrent programming in Linux",
    category: "system",
    price: "$59",
    rating: 4.8,
    students: "5.9k",
    duration: "24h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Process Creation", "Threading Basics", "Synchronization", "IPC Mechanisms", "Deadlock Prevention"]
  },
  {
    id: 8,
    title: "File Systems & Storage",
    description: "Understanding Linux file systems and storage management",
    category: "network",
    price: "$54",
    rating: 4.6,
    students: "4.2k",
    duration: "18h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Ext4 File System", "XFS & Btrfs", "File Permissions", "Storage Management", "RAID Configuration"]
  },
  {
    id: 9,
    title: "System Calls & APIs",
    description: "Master Linux system calls and API programming",
    category: "system",
    price: "$49",
    rating: 4.7,
    students: "6.1k",
    duration: "22h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["System Call Interface", "File Operations", "Process Control", "Signal Handling", "Memory Mapping"]
  },
  {
    id: 10,
    title: "Device Drivers Development",
    description: "Write custom device drivers for Linux kernel",
    category: "system",
    price: "$74",
    rating: 4.5,
    students: "3.2k",
    duration: "30h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Driver Architecture", "Character Devices", "Block Devices", "Interrupt Handling", "DMA Operations"]
  },
  {
    id: 11,
    title: "Linux Security & Hardening",
    description: "Secure Linux systems at the OS level",
    category: "network",
    price: "$64",
    rating: 4.9,
    students: "8.3k",
    duration: "26h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["SELinux & AppArmor", "Access Control Lists", "Encryption", "Security Auditing", "Hardening Techniques"]
  },
  {
    id: 12,
    title: "Performance Tuning & Profiling",
    description: "Optimize system performance and troubleshoot bottlenecks",
    category: "system",
    price: "$69",
    rating: 4.8,
    students: "5.7k",
    duration: "24h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Performance Analysis", "Profiling Tools", "CPU Optimization", "I/O Tuning", "Benchmarking"]
  },
  {
    id: 13,
    title: "Embedded Linux Programming",
    description: "Build applications for embedded Linux systems",
    category: "system",
    price: "$79",
    rating: 4.7,
    students: "4.1k",
    duration: "32h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Embedded Systems Basics", "Cross-Compilation", "Board Bring-up", "Device Trees", "Boot Loaders"]
  },
  {
    id: 14,
    title: "Real-Time Operating Systems",
    description: "Master RTOS concepts and Linux real-time extensions",
    category: "system",
    price: "$74",
    rating: 4.6,
    students: "3.8k",
    duration: "28h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["RTOS Fundamentals", "Real-Time Scheduling", "RT-Linux Patch", "Priority Inversion", "Latency Analysis"]
  },
  {
    id: 15,
    title: "Linux Debugging Tools",
    description: "Master GDB, Valgrind, and advanced debugging techniques",
    category: "system",
    price: "$54",
    rating: 4.8,
    students: "6.5k",
    duration: "20h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["GDB Debugging", "Valgrind for Memory", "Strace & Ltrace", "Core Dumps", "Performance Debugging"]
  },
  {
    id: 16,
    title: "System Design Patterns",
    description: "Design scalable system-level applications",
    category: "system",
    price: "$69",
    rating: 4.9,
    students: "7.8k",
    duration: "26h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Architectural Patterns", "Design Principles", "Scalability", "Fault Tolerance", "Distributed Systems"]
  }
];

const networkingCourses: Course[] = [
  {
    id: 17,
    title: "Complete TCP/IP Networking",
    description: "Master network protocols from basics to advanced",
    category: "network",
    price: "$59",
    rating: 4.8,
    students: "11.2k",
    duration: "28h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["OSI Model", "TCP/IP Stack", "IP Addressing", "Subnetting", "Routing Basics", "Protocol Analysis"]
  },
  {
    id: 18,
    title: "Network Programming in C",
    description: "Build network applications with sockets programming",
    category: "network",
    price: "$64",
    rating: 4.7,
    students: "7.5k",
    duration: "24h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Socket Programming", "TCP Sockets", "UDP Sockets", "Client-Server Model", "Non-blocking I/O"]
  },
  {
    id: 19,
    title: "Network Security Fundamentals",
    description: "Learn essential network security concepts and practices",
    category: "network",
    price: "$64",
    rating: 4.8,
    students: "7.1k",
    duration: "20h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Security Principles", "Cryptography Basics", "SSL/TLS", "Authentication", "Network Attacks"]
  },
  {
    id: 20,
    title: "Wireshark & Packet Analysis",
    description: "Master network traffic analysis and troubleshooting",
    category: "network",
    price: "$49",
    rating: 4.9,
    students: "9.3k",
    duration: "18h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Wireshark Basics", "Capture Filters", "Display Filters", "Protocol Analysis", "Network Troubleshooting"]
  },
  {
    id: 21,
    title: "Network Architecture Design",
    description: "Design scalable and resilient network infrastructures",
    category: "system",
    price: "$74",
    rating: 4.8,
    students: "5.4k",
    duration: "26h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Network Topology", "High Availability", "Redundancy", "Capacity Planning", "Network Segmentation"]
  },
  {
    id: 22,
    title: "Routing Protocols & BGP",
    description: "Master dynamic routing and internet routing protocols",
    category: "network",
    price: "$69",
    rating: 4.7,
    students: "4.8k",
    duration: "24h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["OSPF Protocol", "BGP Fundamentals", "Route Redistribution", "Policy Routing", "Path Selection"]
  },
  {
    id: 23,
    title: "Network Automation with Python",
    description: "Automate network configurations and management",
    category: "system",
    price: "$59",
    rating: 4.6,
    students: "6.2k",
    duration: "22h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Python Networking", "Paramiko & Netmiko", "NAPALM Library", "Ansible for Networks", "REST APIs"]
  },
  {
    id: 24,
    title: "VPN & Tunneling Technologies",
    description: "Implement secure network tunnels and VPN solutions",
    category: "network",
    price: "$64",
    rating: 4.7,
    students: "5.9k",
    duration: "20h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["VPN Types", "IPsec Protocol", "SSL VPN", "Site-to-Site VPN", "Remote Access VPN"]
  },
  {
    id: 25,
    title: "Software Defined Networking",
    description: "Master SDN concepts and OpenFlow programming",
    category: "system",
    price: "$79",
    rating: 4.6,
    students: "3.7k",
    duration: "28h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["SDN Architecture", "OpenFlow Protocol", "SDN Controllers", "Network Virtualization", "NFV Basics"]
  },
  {
    id: 26,
    title: "Network Load Balancing",
    description: "Design and implement load balancing solutions",
    category: "network",
    price: "$69",
    rating: 4.8,
    students: "4.5k",
    duration: "22h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Load Balancing Algorithms", "Layer 4 vs Layer 7", "Health Checks", "HAProxy", "NGINX Load Balancer"]
  },
  {
    id: 27,
    title: "DNS & DHCP Management",
    description: "Master core network services configuration",
    category: "network",
    price: "$44",
    rating: 4.7,
    students: "8.1k",
    duration: "16h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["DNS Fundamentals", "BIND Configuration", "DHCP Setup", "DNS Security", "Dynamic DNS"]
  },
  {
    id: 28,
    title: "Firewall & IDS/IPS",
    description: "Configure network security devices and intrusion detection",
    category: "network",
    price: "$69",
    rating: 4.9,
    students: "7.6k",
    duration: "24h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Firewall Rules", "iptables & nftables", "IDS/IPS Concepts", "Snort Configuration", "Security Policies"]
  },
  {
    id: 29,
    title: "IPv6 Implementation",
    description: "Transition to and implement IPv6 networks",
    category: "network",
    price: "$54",
    rating: 4.6,
    students: "4.3k",
    duration: "18h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["IPv6 Addressing", "Subnetting IPv6", "Dual Stack", "IPv6 Routing", "Migration Strategies"]
  },
  {
    id: 30,
    title: "Wireless Network Engineering",
    description: "Design and secure wireless network infrastructures",
    category: "system",
    price: "$64",
    rating: 4.7,
    students: "5.2k",
    duration: "22h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["WiFi Standards", "Wireless Security", "Access Point Config", "RF Design", "Troubleshooting"]
  },
  {
    id: 31,
    title: "Network Performance Optimization",
    description: "Optimize network throughput and reduce latency",
    category: "system",
    price: "$59",
    rating: 4.8,
    students: "6.8k",
    duration: "20h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["Bandwidth Management", "QoS Configuration", "Traffic Shaping", "Latency Reduction", "Performance Testing"]
  },
  {
    id: 32,
    title: "Cloud Networking (AWS/Azure/GCP)",
    description: "Master cloud networking across major platforms",
    category: "network",
    price: "$74",
    rating: 4.9,
    students: "9.7k",
    duration: "30h",
    url: "https://www.csepracticals.com/alpc/",
    contents: ["VPC Configuration", "Cloud Load Balancers", "Security Groups", "VPN Gateways", "Multi-cloud Networking"]
  }
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
  const [expandedCourses, setExpandedCourses] = useState<Set<number>>(new Set());
  const coursesPerSlide = 5;
  const totalSlides = Math.ceil(courses.length / coursesPerSlide);
  const initialMobileCourses = 4;
  const audioContextRef = useRef<AudioContext | null>(null);

  // Play click sound on hover
  const playClickSound = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as never)['webkitAudioContext'])();
    }
    
    const audioContext = audioContextRef.current;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  }, []);

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
    setSlideDirection("left");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setSlideDirection(null);
    }, 100);
  };

  const prevSlide = () => {
    setSlideDirection("right");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setSlideDirection(null);
    }, 100);
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
                className={`grid grid-cols-5 gap-8 transition-all duration-700 ease-in-out ${
                  slideDirection === "left" ? "translate-x-[-100%] opacity-0" : 
                  slideDirection === "right" ? "translate-x-[100%] opacity-0" : 
                  "translate-x-0 opacity-100"
                }`}
              >
                {currentSliderCourses.map((course, index) => (
                  <div key={course.id} className="relative group/card" onMouseEnter={playClickSound}>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <Card
                        className={`group overflow-hidden border-2 transition-all duration-300 hover:shadow-xl h-full flex flex-col ${getColorClasses(index).card}`}
                      >
                        <div className="relative overflow-hidden">
                          <div className={`relative w-full h-36 flex items-center justify-center ${
                            course.category === "system" 
                              ? "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700" 
                              : "bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-600"
                          } group-hover:scale-110 transition-transform duration-500`}>
                            {/* Animated overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Grid pattern overlay */}
                            <div className="absolute inset-0 opacity-10" style={{
                              backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                              backgroundSize: '20px 20px'
                            }} />
                            
                            <div className="text-center p-3 relative z-10">
                              <div className="text-white/90 text-4xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300">
                                {course.category === "system" ? "{ }" : "</>"}
                              </div>
                              <div className="text-white/80 text-xs font-semibold uppercase tracking-widest">
                                {course.category === "system" ? "System Programming" : "Networking"}
                              </div>
                            </div>
                            
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                          </div>
                          
                          {/* Price Badge - Larger and more prominent */}
                          <div className="absolute top-2 right-2 z-20">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                              <div className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-white px-3 py-1.5 rounded-lg text-lg font-black shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                                {course.price}
                              </div>
                            </div>
                          </div>
                          
                          {/* Category Badge */}
                          <div className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg ${
                            course.category === "system"
                              ? "bg-blue-500/90 text-white"
                              : "bg-cyan-500/90 text-white"
                          }`}>
                            {course.category === "system" ? "System" : "Network"}
                          </div>
                        </div>

                        <CardContent className="p-3 flex-1 flex flex-col bg-gradient-to-b from-transparent to-accent/5">
                          <h4 className="text-base font-bold mb-1.5 line-clamp-2 min-h-[2.8rem] text-foreground group-hover:text-primary transition-colors leading-tight">
                            {course.title}
                          </h4>
                          <p className="text-xs text-muted-foreground/80 mb-3 line-clamp-2 min-h-[2.2rem] leading-relaxed">
                            {course.description}
                          </p>

                          <div className="flex items-center justify-between text-xs mb-2 mt-auto gap-2">
                            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-400/20 text-yellow-700 dark:text-yellow-300 border border-yellow-400/30 shadow-sm">
                              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                              <span className="font-black">{course.rating}</span>
                            </div>
                            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gradient-to-br from-blue-400/20 to-cyan-400/20 text-blue-700 dark:text-blue-300 border border-blue-400/30 shadow-sm">
                              <Users className="w-4 h-4" />
                              <span className="font-bold">{course.students}</span>
                            </div>
                            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gradient-to-br from-purple-400/20 to-pink-400/20 text-purple-700 dark:text-purple-300 border border-purple-400/30 shadow-sm">
                              <Clock className="w-4 h-4" />
                              <span className="font-bold">{course.duration}</span>
                            </div>
                          </div>
                        </CardContent>

                        <CardFooter className="p-3 pt-0">
                          <Button
                            className="w-full bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary text-primary-foreground font-bold shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105 text-xs"
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
            <div className="grid grid-cols-5 gap-8 px-2">
              {courses.map((course, index) => (
                <div key={course.id} className="relative group/card" onMouseEnter={playClickSound}>
                  <a
                    href="https://www.csepracticals.com/alpc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card
                      className={`group overflow-hidden border-2 transition-all duration-300 hover:shadow-xl h-full flex flex-col ${getColorClasses(index).card}`}
                    >
                      <div className="relative overflow-hidden">
                        <div className={`relative w-full h-36 flex items-center justify-center ${
                          course.category === "system" 
                            ? "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700" 
                            : "bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-600"
                        } group-hover:scale-110 transition-transform duration-500`}>
                          {/* Animated overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Grid pattern overlay */}
                          <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                          }} />
                          
                          <div className="text-center p-3 relative z-10">
                            <div className="text-white/90 text-4xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300">
                              {course.category === "system" ? "{ }" : "</>"}
                            </div>
                            <div className="text-white/80 text-xs font-semibold uppercase tracking-widest">
                              {course.category === "system" ? "System Programming" : "Networking"}
                            </div>
                          </div>
                          
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        </div>
                        
                        {/* Price Badge - Larger and more prominent */}
                        <div className="absolute top-2 right-2 z-20">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-white px-3 py-1.5 rounded-lg text-lg font-black shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                              {course.price}
                            </div>
                          </div>
                        </div>
                        
                        {/* Category Badge */}
                        <div className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg ${
                          course.category === "system"
                            ? "bg-blue-500/90 text-white"
                            : "bg-cyan-500/90 text-white"
                        }`}>
                          {course.category === "system" ? "System" : "Network"}
                        </div>
                      </div>

                      <CardContent className="p-3 flex-1 flex flex-col bg-gradient-to-b from-transparent to-accent/5">
                        <h4 className="text-base font-bold mb-1.5 line-clamp-2 min-h-[2.8rem] text-foreground group-hover:text-primary transition-colors leading-tight">
                          {course.title}
                        </h4>
                        <p className="text-xs text-muted-foreground/80 mb-3 line-clamp-2 min-h-[2.2rem] leading-relaxed">
                          {course.description}
                        </p>

                        <div className="flex items-center justify-between text-xs mb-3 mt-auto gap-2">
                          <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-500/20 transition-colors">
                            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            <span className="font-bold">{course.rating}</span>
                          </div>
                          <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-colors">
                            <Users className="w-4 h-4" />
                            <span className="font-semibold">{course.students}</span>
                          </div>
                          <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 transition-colors">
                            <Clock className="w-4 h-4" />
                            <span className="font-semibold">{course.duration}</span>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="p-4 pt-0">
                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          size="sm"
                        >
                          Enroll Now
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
                onMouseEnter={playClickSound}
              >
                <button
                  onClick={() => toggleCourse(course.id)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-accent/5 transition-colors"
                >
                  <div className="flex-1 min-w-0 pr-3">
                    <h4 className="text-sm font-bold text-foreground line-clamp-1">
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
                    <div className="pt-3">
                      <div className={`w-full h-40 flex items-center justify-center rounded-md ${
                        course.category === "system" 
                          ? "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700" 
                          : "bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-600"
                      }`}>
                        <div className="text-center p-3">
                          <div className="text-white/90 text-4xl font-bold mb-1">
                            {course.category === "system" ? "{ }" : "</>"}
                          </div>
                          <div className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                            {course.category === "system" ? "System Programming" : "Networking"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
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
    <section className="py-16 px-6 bg-background">
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
          title="System Programming"
          courses={systemProgrammingCourses}
          icon="⚙️"
        />

        <CategorySection
          title="Networking"
          courses={networkingCourses}
          icon="🌐"
        />
      </div>
    </section>
  );
}
