import { useState, useRef } from "react";
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
    name: "Chandra Pal",
    role: "Engineer Manager",
    company: "Tech Solutions Inc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    review: "This is the perfect course to bridge the gap from intermediate to advanced understanding of programming. If you want to move away from dependence on your IDE and really understand how to interact with your compiler/linker/debugger/makefiles this is a very great class to bridge that gap. If you just want to learn to program this is probably a bit too advanced to be a beginners course, though I do recommend learning this type of thing earlier than later in your programming education.",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/chandra-pal-singh-3bb74847/"
  },
  {
    id: 2,
    name: "Anurag Singh",
    role: "Staff Software Engg",
    company: "Dragger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    review: "This course is simple the best of its kind. The instructor explains the theoretical concepts in a dynamic way with real life code examples, where complex subjects are explained clearly and in detail. The networking project has been created with production grade code with a description of its architecture. The instructor codes along while explaining the concepts. The instructor clearly indicates that the course is not for beginners and explains what other topics the student needs to know to be able to take full",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/anurag-singh-b190b627"
  },
  {
    id: 3,
    name: "Amar Othman",
    role: "Embedded Systems Developer",
    company: "IoT Innovations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    review: "so good so far , you must be aware of data structure before enrolling in this course , you will learn a lot of techniques for me he made his promise to take my programing skill to the next step and that what happen with me , so thank you Abhishek for your effort and to make such great courses available to us. i already purchased all of his courses, meet you in the next course , heap memory manager while(Abhishek){ courses->next; }",
    rating: 5,
    linkedinUrl: "https://www.udemy.com/user/amr-othman-15/"
  },
  {
    id: 4,
    name: "Llyod Mailcut",
    role: "Embedded Engineer",
    company: "Open Source Systems",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    review: "Exceptional course, would leave 6 stars if I could! If you have completed introductory+intermediate courses on C programming, and you are comfortable with data structures and algorithms in C, then you are well primed to undertake this project. I recently presented this project at an assessment centre, highlighting the differences between my approach to some areas versus Abisheks (i.e iterative graph traversal versus recursive graph traversal, algorithm to update root objects etc..) and I was given a job offer. So thank you Abishek! If you are considering taking this course I would honestly suggest that you ignore all negative reviews. They are left by people who are either at a level too beginner to appreciate the course, or people who simply refuse to see the effort that went into its development. I highly recommend Abishek as an instructor and I will be enrolling in every single one of his C courses! ",
    rating: 5,
    linkedinUrl: "https://www.udemy.com/user/lloyd-malecaut/"
  },
  {
    id: 5,
    name: "Dhruv Dohre",
    role: "Embedded S/w Engg",
    company: "C-DOT",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    review: "Eventhough I am only half way through this course at the moment, I feel that is really an amazing course. People interested in low level network development should really go for it. This course allows you to actually get your hands dirty, i would suggest don't just copy paste the code from the instructors repository but actually try an implement everything on your own, it'll take more time but you will learn a lot. Although the course was released a couple of years ago, The support provided by the instructor is great. He even took out the time to help me debug my code and gave clear cut explanation to all my doubts. 100% would recommend.",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/dhruv-dohare-24721b1b2"
  },
  {
    id: 6,
    name: "Abhay Shankar Pathak",
    role: "Cloud Application Developer",
    company: "Infosys",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    review: "I had been looking for resources in this space and thus I know that the courses provided by the instructor are currently the best available on internet for anybody, who wants to learn System programming and Network Programming. The courses are proper blend of theory and hands-on and is beneficial for anybody preparing for interview or already working in this stream. Though the prominent language used is C, the content taught for the most part can be treated as language agnostic. I for myself am trying to learn the concepts using 'Zig' language. Also, you will also get answers for your queries/doubts related to course from the instructor himself",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/abhay-shanker-pathak-3458bb1ab"
  },
  {
    id: 7,
    name: "James Fink",
    role: "Platform Engineer",
    company: "Enterprise Systems Co",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    review: "Great course! I would recommend to provide more upfront material describing the problem to be solved. I have written wrappers around malloc/free that track where things are allocated (file, line) and not freed at the end of of the program (or at any time during) - but the memory model was strictly hierarchical - no cycles. So the begging of the source, I'm thinking \"why so much effort - this could be much simpler!\" Now that I see the problem you are addressing !!! Wow. Good course. I like the way that you are not going line-by-line over your solution, but providing hints and highlights! A++",
    rating: 5,
    linkedinUrl: "https://www.udemy.com/user/james-fink-15/"
  },
  {
    id: 8,
    name: "Nitin",
    role: "Technical Lead",
    company: "Samsung",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    review: "Yet another incredible course by CSEPracticals. The instructor's knowledge is *vast* - definitely my favorite instructor on Udemy now. Seriously, if you want to understand how C and programming in general works under the hood, take this course. I really enjoyed that this course was more theory-heavy than the others. Lots of valuable information such as how malloc / calloc / realloc and heap memory works, how memory mapping and paging works, 36 bit vs 64 bit, etc. The theory is accompanied by tons of analogies, illustrations, and examples along the way. There's a LOT of information in here that you will absolutely need to know for interviews and professional software development. Excellent stuff!",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/nitin-kumar-gautam-30bb315a/"
  }
];

export default function ReviewSlider() {
  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleReview = (id: number) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const shouldShowReadMore = (text: string) => text.length > 280;

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
        <div
          className="relative"
          onMouseEnter={() => {
            setIsPaused(true);
            const el = sliderRef.current;
            if (el) {
              const computed = window.getComputedStyle(el);
              const playState = computed.animationPlayState;
              if (playState !== "paused") {
                el.style.animationPlayState = "paused";
              }
            }
          }}
          onMouseLeave={() => {
            setIsPaused(false);
            const el = sliderRef.current;
            if (el) {
              el.style.animationPlayState = "running";
            }
          }}
        >
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex gap-4"
              style={{
                width: 'fit-content',
                animation: 'scroll-right 80s linear infinite',
                animationPlayState: isPaused ? 'paused' : 'running'
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
                      <div className="text-xs text-muted-foreground leading-relaxed flex-1">
                        <p className={`transition-all ${expandedReviews[review.id] ? "" : "line-clamp-6"}`}>
                          "{review.review}"
                        </p>
                        {shouldShowReadMore(review.review) && (
                          <button
                            onClick={() => toggleReview(review.id)}
                            className="mt-1 text-[11px] font-semibold text-violet-500 hover:text-violet-400 focus:outline-none"
                          >
                            {expandedReviews[review.id] ? "Show less" : "Read more"}
                          </button>
                        )}
                      </div>
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
