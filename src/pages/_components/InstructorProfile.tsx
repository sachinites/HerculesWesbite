import { Award, BookOpen, Users, Youtube, MessageCircle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

export default function InstructorProfile() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm mb-4">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-sm text-accent font-medium">Expert Instructor</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
            Meet Your Instructor
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from industry experts with years of practical experience
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border-2 border-accent/30 hover:border-accent transition-all rounded-lg overflow-hidden shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30">
          <div className="grid md:grid-cols-3 gap-8 p-8">
            {/* Profile Image */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden border-4 border-primary shadow-xl shadow-primary/50">
                  <img 
                    src="https://ik.imagekit.io/sachinites1986/Images/my_pic-removebg.png" 
                    alt="Instructor Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">Sachin Sharma</h3>
                <p className="text-muted-foreground">System Programming Expert</p>
              </div>
            </div>

            {/* Profile Details */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">About</h4>
                <p className="text-muted-foreground leading-relaxed">
                  With over a decade of experience in Linux system programming and computer
                  networking, I have worked on building large-scale distributed systems and
                  mentored thousands of students. My courses focus on practical, hands-on
                  learning with real-world projects that prepare you for industry challenges.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="group text-center p-4 rounded-lg bg-background/50 border-2 border-primary/30 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105">
                  <Users className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="group text-center p-4 rounded-lg bg-background/50 border-2 border-chart-2/30 hover:border-chart-2 transition-all hover:shadow-lg hover:shadow-chart-2/30 hover:scale-105">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-chart-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
                <div className="group text-center p-4 rounded-lg bg-background/50 border-2 border-accent/30 hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/30 hover:scale-105">
                  <Youtube className="h-8 w-8 mx-auto mb-2 text-accent group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">Videos</div>
                </div>
                <div className="group text-center p-4 rounded-lg bg-background/50 border-2 border-chart-5/30 hover:border-chart-5 transition-all hover:shadow-lg hover:shadow-chart-5/30 hover:scale-105">
                  <Award className="h-8 w-8 mx-auto mb-2 text-chart-5 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>

              {/* Expertise */}
              <div>
                <h4 className="text-xl font-semibold mb-3">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Linux Internals",
                    "System Programming",
                    "C/C++",
                    "Multithreading",
                    "Socket Programming",
                    "Network Protocols",
                    "TCP/IP",
                    "Async I/O",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button size="lg" className="shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all hover:scale-105">
                  View All Courses
                </Button>
                <Button size="lg" variant="secondary" className="shadow-lg shadow-accent/50 hover:shadow-xl hover:shadow-accent/70 transition-all hover:scale-105 border border-accent/50">
                  Connect on LinkedIn
                </Button>
              </div>

              {/* New Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button 
                  size="lg" 
                  className="bg-chart-2 hover:bg-chart-2/90 text-foreground shadow-[0_0_20px_rgba(100,200,255,0.6)] hover:shadow-[0_0_30px_rgba(100,200,255,0.8)] border-2 border-chart-2/50 hover:border-chart-2 transition-all hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Join our Telegram Group
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-background font-semibold shadow-[0_0_20px_rgba(255,200,0,0.6)] hover:shadow-[0_0_30px_rgba(255,200,0,0.8)] border-2 border-yellow-400/50 hover:border-yellow-300 transition-all hover:scale-105"
                >
                  <DollarSign className="h-5 w-5 mr-2" />
                  Make Passive Income with us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
