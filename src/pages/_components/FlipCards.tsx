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

        {/* Desktop Tree Structure - Original Layout */}
        <div className="hidden md:flex flex-col items-center gap-8">
          {/* Parent Card - Jackpot */}
          <div className="perspective-1000 w-full max-w-2xl h-[400px] flip-card">
            <div className="flip-card-inner">
              {/* Front */}
              <Card className="flip-card-front border-2 border-amber-400/70 shadow-xl shadow-amber-400/30 bg-card p-8 flex items-center justify-center overflow-hidden">
                <div className="text-center w-full">
                  <div className="relative flex items-center justify-center mb-3">
                    <div className="absolute h-24 w-24 rounded-full bg-amber-400/25 blur-2xl animate-pulse" />
                    <div className="sparkle-orbit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28">
                      <span className="absolute left-1/2 -translate-x-1/2 -top-1 text-lg text-amber-50/90">✨</span>
                    </div>
                    <div className="relative trophy-glow flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-orange-500 text-4xl shadow-[0_0_35px_rgba(251,191,36,0.6)]">
                      🏆
                      <span className="absolute -top-0.5 -right-1 text-base text-amber-100/90 animate-ping">✨</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-amber-400">
                    🎰 Jackpot Package
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Complete mastery bundle with all courses and exclusive mentorship
                  </p>
                  <div className="space-y-1.5 text-sm max-h-[180px] overflow-y-auto">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-amber-400 text-base flex-shrink-0">✓</span>
                      <span>22 Paid and 4 Free Courses</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-amber-400 text-base flex-shrink-0">✓</span>
                      <span>Access All Material</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-amber-400 text-base flex-shrink-0">✓</span>
                      <span>1-on-1 mentorship</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-amber-400 text-base flex-shrink-0">✓</span>
                      <span>Lifetime updates</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-amber-400 text-base flex-shrink-0">✓</span>
                      <span>All Future Release Courses Free</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-amber-400 text-base flex-shrink-0">✓</span>
                      <span>You will not be charged for anything again!</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Back */}
              <Card className="flip-card-back border-2 border-amber-400/70 shadow-xl shadow-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-400/5 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-bold text-amber-400 mb-6 leading-tight text-center">
                    <span className="block md:inline">$120</span>
                    <span className="block md:inline">/INR9900</span>
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg">One-time payment</p>
                  <a
                    href="https://www.csepracticals.com/jackpot/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                  <Button
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-400 text-white w-full shadow-lg shadow-amber-400/30 text-lg py-6"
                  >
                    Enroll Now
                  </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>

          {/* Vertical Line to Children */}
          <div className="hidden md:block w-0.5 h-16 bg-gradient-to-b from-amber-400/50 to-amber-400/20"></div>

          {/* Children Cards */}
          <div className="flex flex-row gap-8 items-center justify-center w-full">
            {/* Left Child - System Programming */}
            <div className="perspective-1000 w-full max-w-md h-[350px] flip-card">
              <div className="flip-card-inner">
                {/* Front */}
                <Card className="flip-card-front border-2 border-rose-400/70 shadow-lg shadow-rose-400/30 bg-card p-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center w-full px-2">
                    <h3 className="text-xl font-bold mb-3 text-rose-400">
                      🚀 System Programming Bundle
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      System programming and Linux Development in C/C++
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-rose-400 text-sm flex-shrink-0">✓</span>
                        <span className="break-words">System Programming Courses</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-rose-400 text-sm flex-shrink-0">✓</span>
                        <span>15 Courses</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-rose-400 text-sm flex-shrink-0">✓</span>
                        <span>Lifetime Access</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-rose-400 text-sm flex-shrink-0">✓</span>
                        <span className="break-words">No Future Free Access</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Back */}
                <Card className="flip-card-back border-2 border-rose-400/70 shadow-lg shadow-rose-400/30 bg-gradient-to-br from-rose-400/20 to-rose-400/5 p-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center w-full px-2">
                    <div className="text-5xl font-bold text-rose-400 mb-4 leading-tight text-center">
                      <span className="block md:inline">$60</span>
                      <span className="block md:inline">/INR5200</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-5">One-time payment</p>
                    <a
                      href="https://www.csepracticals.com/course-detail/sysprog-bundle/6292/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                    <Button
                      size="lg"
                        className="bg-rose-500 hover:bg-rose-400 text-white w-full shadow-lg shadow-rose-400/30 py-4 text-sm"
                    >
                      Enroll Now
                    </Button>
                    </a>
                  </div>
                </Card>
              </div>
            </div>

            {/* Middle Child - Networking */}
            <div className="perspective-1000 w-full max-w-md h-[350px] flip-card">
              <div className="flip-card-inner">
                {/* Front */}
                <Card className="flip-card-front border-2 border-teal-400/70 shadow-lg shadow-teal-400/30 bg-card p-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center w-full px-2">
                    <h3 className="text-xl font-bold mb-3 text-teal-400">
                      🌐 Networking Bundle
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Networking protocols and Programming
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-teal-400 text-sm flex-shrink-0">✓</span>
                        <span className="break-words">Networking Theory/Coding</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-teal-400 text-sm flex-shrink-0">✓</span>
                        <span>11 Courses</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-teal-400 text-sm flex-shrink-0">✓</span>
                        <span>Lifetime Access</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-teal-400 text-sm flex-shrink-0">✓</span>
                        <span className="break-words">No Future Free Access</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Back */}
                <Card className="flip-card-back border-2 border-teal-400/70 shadow-lg shadow-teal-400/30 bg-gradient-to-br from-teal-400/20 to-teal-400/5 p-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center w-full px-2">
                    <div className="text-5xl font-bold text-teal-400 mb-4 leading-tight text-center">
                      <span className="block md:inline">$60</span>
                      <span className="block md:inline">/INR5200</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-5">One-time payment</p>
                    <a
                      href="https://www.csepracticals.com/course-detail/networking-courses-bundle/6340/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        size="lg"
                        className="bg-teal-500 hover:bg-teal-400 text-white w-full shadow-lg shadow-teal-400/30 py-4 text-sm"
                      >
                        Enroll Now
                      </Button>
                    </a>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Child - Free Package */}
            <div className="perspective-1000 w-full max-w-md h-[350px] flip-card">
              <div className="flip-card-inner">
                {/* Front */}
                <Card className="flip-card-front border-2 border-emerald-400/70 shadow-lg shadow-emerald-400/30 bg-card p-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center w-full px-2">
                    <h3 className="text-xl font-bold mb-3 text-emerald-400">
                      🎁 Free Package
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Get started with free courses
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-emerald-400 text-sm flex-shrink-0">✓</span>
                        <span>4 Free Courses</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-emerald-400 text-sm flex-shrink-0">✓</span>
                        <span>All Course PDFs/PPTs/Ebooks Access</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-emerald-400 text-sm flex-shrink-0">✓</span>
                        <span>Just a Sign Up Required</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-emerald-400 text-sm flex-shrink-0">✓</span>
                        <span>Lifetime Access</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-emerald-400 text-sm flex-shrink-0">✓</span>
                        <span className="break-words">No Future Free Access</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Back */}
                <Card className="flip-card-back border-2 border-emerald-400/70 shadow-lg shadow-emerald-400/30 bg-gradient-to-br from-emerald-400/20 to-emerald-400/5 p-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center w-full px-2">
                    <div className="text-5xl font-bold text-emerald-400 mb-4">FREE</div>
                    <p className="text-muted-foreground text-sm mb-5">No payment required</p>
                    <a
                      href="https://www.csepracticals.com/course-detail/free-pdfs-and-ppts/6517/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        size="lg"
                        className="bg-emerald-500 hover:bg-emerald-400 text-white w-full shadow-lg shadow-emerald-400/30 py-4 text-sm"
                      >
                        Get Free Material
                      </Button>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Tree Structure - Inverted Layout */}
        <div className="md:hidden flex flex-col items-center gap-4">
          {/* Children Cards on Top - Side by Side */}
          <div className="flex flex-row gap-4 items-start justify-center w-full px-2">
            {/* Left Child - System Programming */}
            <div className="perspective-1000 w-1/2 h-[280px] flip-card">
              <div className="flip-card-inner">
                {/* Front */}
                <Card className="flip-card-front border-2 border-rose-400/70 shadow-lg shadow-rose-400/30 bg-card p-3 flex items-center justify-center overflow-hidden">
                  <div className="text-center w-full px-1">
                    <h3 className="text-base font-bold mb-2 text-rose-400">
                      🚀 System Programming
                    </h3>
                    <p className="text-muted-foreground mb-2 text-[10px]">
                      System programming and Linux
                    </p>
                    <div className="space-y-1.5 text-[10px]">
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-rose-400 text-xs flex-shrink-0">✓</span>
                        <span className="break-words">15 Courses</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-rose-400 text-xs flex-shrink-0">✓</span>
                        <span className="break-words">Lifetime Access</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Back */}
                <Card className="flip-card-back border-2 border-rose-400/70 shadow-lg shadow-rose-400/30 bg-gradient-to-br from-rose-400/20 to-rose-400/5 p-3 flex items-center justify-center overflow-hidden">
                  <div className="text-center w-full px-1 flex flex-col items-center justify-center h-full space-y-2">
                    <div className="text-2xl font-bold text-rose-400 mb-2 leading-tight text-center">
                      <span className="block md:inline">$60</span>
                      <span className="block md:inline">/INR5200</span>
                    </div>
                    <p className="text-muted-foreground text-[10px]">One-time</p>
                    <a
                      href="https://www.csepracticals.com/course-detail/sysprog-bundle/6292/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        size="sm"
                        className="bg-rose-500 hover:bg-rose-400 text-white w-full shadow-lg shadow-rose-400/30 text-[10px] py-1"
                      >
                        Enroll Now
                      </Button>
                    </a>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Child - Networking */}
            <div className="perspective-1000 w-1/2 h-[280px] flip-card">
              <div className="flip-card-inner">
                {/* Front */}
                <Card className="flip-card-front border-2 border-teal-400/70 shadow-lg shadow-teal-400/30 bg-card p-3 flex items-center justify-center overflow-hidden">
                  <div className="text-center w-full px-1">
                    <h3 className="text-base font-bold mb-2 text-teal-400">
                      🌐 Networking
                    </h3>
                    <p className="text-muted-foreground mb-2 text-[10px]">
                      Networking protocols
                    </p>
                    <div className="space-y-1.5 text-[10px]">
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-teal-400 text-xs flex-shrink-0">✓</span>
                        <span className="break-words">11 Courses</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-teal-400 text-xs flex-shrink-0">✓</span>
                        <span className="break-words">Lifetime Access</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Back */}
                <Card className="flip-card-back border-2 border-teal-400/70 shadow-lg shadow-teal-400/30 bg-gradient-to-br from-teal-400/20 to-teal-400/5 p-3 flex items-center justify-center overflow-hidden">
                  <div className="text-center w-full px-1 flex flex-col items-center justify-center h-full space-y-2">
                    <div className="text-2xl font-bold text-teal-400 mb-2 leading-tight text-center">
                      <span className="block md:inline">$60</span>
                      <span className="block md:inline">/INR5200</span>
                    </div>
                    <p className="text-muted-foreground text-[10px]">One-time</p>
                    <a
                      href="https://www.csepracticals.com/course-detail/networking-courses-bundle/6340/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        size="sm"
                        className="bg-teal-500 hover:bg-teal-400 text-white w-full shadow-lg shadow-teal-400/30 text-[10px] py-1"
                      >
                        Enroll Now
                      </Button>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Connecting Lines - Inverted Y Shape */}
          <div className="relative w-full h-12 flex items-center justify-center">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Left line from System Programming */}
              <line x1="25" y1="0" x2="50" y2="100" stroke="rgb(251 191 36 / 0.5)" strokeWidth="2" />
              {/* Right line from Networking */}
              <line x1="75" y1="0" x2="50" y2="100" stroke="rgb(251 191 36 / 0.5)" strokeWidth="2" />
            </svg>
          </div>

          {/* Parent Card - Jackpot at Bottom (More Prominent) */}
          <div className="perspective-1000 w-full max-w-md h-[320px] flip-card">
            <div className="flip-card-inner">
              {/* Front */}
              <Card className="flip-card-front border-4 border-amber-400 shadow-2xl shadow-amber-400/50 bg-card p-4 flex items-center justify-center overflow-hidden" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
                <div className="text-center w-full relative" style={{ isolation: 'isolate', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                  <div className="relative flex items-center justify-center mb-2" style={{ zIndex: 1, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                    <div className="absolute h-16 w-16 rounded-full bg-amber-400/25 blur-xl animate-pulse" style={{ zIndex: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }} />
                    <div className="sparkle-orbit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20" style={{ zIndex: 1, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                      <span className="absolute left-1/2 -translate-x-1/2 -top-0.5 text-base text-amber-50/90" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>✨</span>
                    </div>
                    <div className="relative trophy-glow flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-orange-500 text-3xl shadow-[0_0_25px_rgba(251,191,36,0.55)]" style={{ zIndex: 2, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                      <span style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>🏆</span>
                      <span className="absolute -top-0.5 -right-0.5 text-sm text-amber-100/90 animate-ping" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>✨</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-amber-400">
                    🎰 Jackpot Package
                  </h3>
                  <p className="text-muted-foreground mb-2 text-xs">
                    Complete mastery bundle
                  </p>
                  <div className="space-y-1 text-[10px] max-h-[140px] overflow-y-auto">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="text-amber-400 text-xs flex-shrink-0">✓</span>
                      <span>22 Paid + 4 Free Courses</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="text-amber-400 text-xs flex-shrink-0">✓</span>
                      <span>1-on-1 Mentorship</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="text-amber-400 text-xs flex-shrink-0">✓</span>
                      <span>All Future Courses Free</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="text-amber-400 text-xs flex-shrink-0">✓</span>
                      <span>Lifetime Access</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Back */}
              <Card className="flip-card-back border-4 border-amber-400 shadow-2xl shadow-amber-400/50 bg-gradient-to-br from-amber-400/30 to-amber-400/10 p-6 flex items-center justify-center" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <div className="text-center" style={{ isolation: 'isolate', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                  <div className="text-5xl font-bold text-amber-400 mb-4">$120</div>
                  <p className="text-muted-foreground mb-6 text-sm">One-time payment</p>
                  <a
                    href="https://www.csepracticals.com/jackpot/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="bg-amber-500 hover:bg-amber-400 text-white w-full shadow-lg shadow-amber-400/30 font-bold"
                    >
                      Enroll Now
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>

          {/* Free Package - Below Jackpot on Mobile */}
          <div className="perspective-1000 w-full max-w-md h-[280px] flip-card mt-4">
            <div className="flip-card-inner">
              {/* Front */}
              <Card className="flip-card-front border-2 border-emerald-400/70 shadow-lg shadow-emerald-400/30 bg-card p-4 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-emerald-400">
                    🎁 Free Package
                  </h3>
                  <p className="text-muted-foreground mb-3 text-xs">
                    Get started with free courses
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>4 Free Courses</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-emerald-400 text-sm flex-shrink-0">✓</span>
                        <span>All Course PDFs/PPTs/Ebooks Access</span>
                      </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Just a Sign Up Required</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Lifetime Access</span>
                    </div>
                  </div>
                  </div>
                </Card>

              {/* Back */}
              <Card className="flip-card-back border-2 border-emerald-400/70 shadow-lg shadow-emerald-400/30 bg-gradient-to-br from-emerald-400/20 to-emerald-400/5 p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-3">FREE</div>
                  <p className="text-muted-foreground text-xs mb-4">No payment</p>
                  <a
                    href="https://www.csepracticals.com/course-detail/free-pdfs-and-ppts/6517/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="sm"
                      className="bg-emerald-500 hover:bg-emerald-400 text-white w-full shadow-lg shadow-emerald-400/30 text-xs"
                    >
                      Get Free Material
                    </Button>
                  </a>
              </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
