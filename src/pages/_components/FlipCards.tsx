import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FlipCards() {
  return (
    <section className="py-16 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Course Packages
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the perfect learning path for your journey
          </p>
        </div>

        {/* Tree Structure */}
        <div className="flex flex-col items-center gap-8">
          {/* Parent Card - Jackpot */}
          <div className="perspective-1000 w-full max-w-2xl h-[400px] flip-card">
            <div className="flip-card-inner">
              {/* Front */}
              <Card className="flip-card-front border-2 border-amber-400/70 shadow-xl shadow-amber-400/30 bg-card p-12 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-4xl font-bold mb-4 text-amber-400">
                    🎰 Jackpot Package
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Complete mastery bundle with all courses and exclusive mentorship
                  </p>
                  <div className="space-y-3 text-base">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-amber-400 text-xl">✓</span>
                      <span>All course access</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-amber-400 text-xl">✓</span>
                      <span>1-on-1 mentorship</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-amber-400 text-xl">✓</span>
                      <span>Lifetime updates</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Back */}
              <Card className="flip-card-back border-2 border-amber-400/70 shadow-xl shadow-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-400/5 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-bold text-amber-400 mb-6">$120</div>
                  <p className="text-muted-foreground mb-8 text-lg">One-time payment</p>
                  <Button
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-400 text-white w-full shadow-lg shadow-amber-400/30 text-lg py-6"
                  >
                    Enroll Now
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Vertical Line to Children */}
          <div className="hidden md:block w-0.5 h-16 bg-gradient-to-b from-amber-400/50 to-amber-400/20"></div>

          {/* Children Cards */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full">
            {/* Left Child - Advanced Path */}
            <div className="perspective-1000 w-full max-w-lg h-[350px] flip-card">
              <div className="flip-card-inner">
                {/* Front */}
                <Card className="flip-card-front border-2 border-rose-400/70 shadow-lg shadow-rose-400/30 bg-card p-10 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-4 text-rose-400">
                      🚀 Advanced Path
                    </h3>
                    <p className="text-muted-foreground mb-6 text-base">
                      Deep dive into system programming and kernel development
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-rose-400 text-lg">✓</span>
                        <span>System programming</span>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-rose-400 text-lg">✓</span>
                        <span>Kernel modules</span>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-rose-400 text-lg">✓</span>
                        <span>Performance tuning</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Back */}
                <Card className="flip-card-back border-2 border-rose-400/70 shadow-lg shadow-rose-400/30 bg-gradient-to-br from-rose-400/20 to-rose-400/5 p-10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-rose-400 mb-5">$65</div>
                    <p className="text-muted-foreground text-base mb-6">One-time payment</p>
                    <Button
                      size="lg"
                      className="bg-rose-500 hover:bg-rose-400 text-white w-full shadow-lg shadow-rose-400/30 py-5"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Child - Network Path */}
            <div className="perspective-1000 w-full max-w-lg h-[350px] flip-card">
              <div className="flip-card-inner">
                {/* Front */}
                <Card className="flip-card-front border-2 border-teal-400/70 shadow-lg shadow-teal-400/30 bg-card p-10 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-4 text-teal-400">
                      🌐 Network Path
                    </h3>
                    <p className="text-muted-foreground mb-6 text-base">
                      Master networking protocols and security fundamentals
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-teal-400 text-lg">✓</span>
                        <span>Network protocols</span>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-teal-400 text-lg">✓</span>
                        <span>Security practices</span>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-teal-400 text-lg">✓</span>
                        <span>Cloud networking</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Back */}
                <Card className="flip-card-back border-2 border-teal-400/70 shadow-lg shadow-teal-400/30 bg-gradient-to-br from-teal-400/20 to-teal-400/5 p-10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-teal-400 mb-5">$65</div>
                    <p className="text-muted-foreground text-base mb-6">One-time payment</p>
                    <Button
                      size="lg"
                      className="bg-teal-500 hover:bg-teal-400 text-white w-full shadow-lg shadow-teal-400/30 py-5"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
