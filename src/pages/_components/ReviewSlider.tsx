import { Card, CardContent } from "@/components/ui/card.tsx";
import { Linkedin, Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  review: string;
  rating: number;
  linkedinUrl: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Senior Systems Engineer",
    company: "Tech Solutions Inc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    review: "The Linux System Programming course transformed my understanding of kernel development. The hands-on projects and clear explanations made complex concepts accessible. Highly recommended for serious developers!",
    rating: 5,
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Cloud Network Engineer",
    company: "Global Networks Ltd",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    review: "CSEPracticals offers the best networking courses I've encountered. The TCP/IP deep dive and practical socket programming examples helped me excel in my cloud infrastructure projects.",
    rating: 5,
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 3,
    name: "Arun Patel",
    role: "Embedded Systems Developer",
    company: "IoT Innovations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    review: "Outstanding content for embedded Linux development! The real-time systems and device driver courses gave me the skills needed to advance my career in hardware engineering.",
    rating: 5,
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Kernel Developer",
    company: "Open Source Systems",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    review: "The kernel development courses are incredibly detailed and practical. I went from basic system calls to writing custom kernel modules. The instructor's expertise shines through every lesson.",
    rating: 5,
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "DevOps Engineer",
    company: "Cloud First Tech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    review: "Perfect blend of theory and practice! The shell scripting and Python automation courses helped me optimize our entire deployment pipeline. Worth every penny!",
    rating: 5,
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 6,
    name: "Ananya Iyer",
    role: "Network Security Specialist",
    company: "SecureNet Solutions",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    review: "The network security and Wireshark courses are exceptional. I gained deep insights into packet analysis and security protocols that immediately improved my work quality.",
    rating: 5,
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 7,
    name: "Karthik Nair",
    role: "Platform Engineer",
    company: "Enterprise Systems Co",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    review: "Comprehensive coverage of system programming fundamentals. The memory management and performance tuning courses helped me optimize critical production systems.",
    rating: 5,
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: 8,
    name: "Meera Das",
    role: "Distributed Systems Developer",
    company: "ScaleUp Technologies",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    review: "Best investment in my career! The networking and system design courses provided the foundation I needed to build scalable distributed systems. Excellent instructor support too.",
    rating: 5,
    linkedinUrl: "https://linkedin.com"
  }
];

export default function ReviewSlider() {
  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-12 px-6 bg-background hidden md:block overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-foreground">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-base">
            Real feedback from developers who transformed their careers
          </p>
        </div>

        {/* Continuous Scrolling Reviews */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex gap-4"
              style={{
                width: 'fit-content',
                animation: 'scroll-right 80s linear infinite'
              }}
            >
              {duplicatedReviews.map((review, index) => (
                <div key={`${review.id}-${index}`} className="flex-shrink-0 w-80">
                  <Card className="group overflow-hidden border-2 border-violet-400/70 hover:border-violet-500 hover:bg-violet-500/5 shadow-violet-400/30 hover:shadow-violet-500/60 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
                    <CardContent className="p-4 flex flex-col flex-1">
                      {/* Profile Section */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-violet-500/50"
                          />
                          <a
                            href={review.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
                          >
                            <Linkedin className="w-3 h-3 text-white" />
                          </a>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-foreground group-hover:text-violet-400 transition-colors truncate">
                            {review.name}
                          </h4>
                          <p className="text-xs text-muted-foreground truncate">{review.role}</p>
                          <p className="text-xs text-muted-foreground truncate">{review.company}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-0.5 mb-2">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-6">
                        "{review.review}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
