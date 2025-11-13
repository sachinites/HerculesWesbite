import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collaborateOpen, setCollaborateOpen] = useState(false);
  const [playlistsOpen, setPlaylistsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 border-b border-primary/30 backdrop-blur-md shadow-lg shadow-primary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">CSEPracticals</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("courses")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Courses
              </button>
              <a
                href="https://www.csepracticals.com/recent-updates/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                Recent Updates
              </a>

              {/* Collaborate Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setCollaborateOpen(true)}
                onMouseLeave={() => setCollaborateOpen(false)}
              >
                <button
                  className="flex items-center text-foreground hover:text-primary transition-colors"
                >
                  Collaborate with Us <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {collaborateOpen && (
                  <div className="absolute top-full pt-2 w-48">
                    <div className="rounded-md bg-popover border border-border shadow-lg">
                      <a 
                        href="https://www.csepracticals.com/become-affiliate-partner/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent rounded-t-md"
                      >
                        Join Affiliate Program
                      </a>
                      <a 
                        href="https://www.csepracticals.com/cross-sell/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent"
                      >
                        Cross-Sell Your Courses
                      </a>
                      <a 
                        href="https://www.csepracticals.com/advt-my-event/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent rounded-b-md"
                      >
                        Advertise My Event On your Platform
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="https://www.csepracticals.com/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                Our Blogs
              </a>

              {/* Youtube Playlists Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setPlaylistsOpen(true)}
                onMouseLeave={() => setPlaylistsOpen(false)}
              >
                <button
                  className="flex items-center text-foreground hover:text-primary transition-colors"
                >
                  Youtube Playlists <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {playlistsOpen && (
                  <div className="absolute top-full pt-2 w-80">
                    <div className="rounded-md bg-popover border border-border shadow-lg max-h-96 overflow-y-auto">
                      <a 
                        href="https://www.youtube.com/playlist?list=PLN9r3gitIiJ58FBJobXN-KJ5YCi8KNgSO" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent rounded-t-md text-sm"
                      >
                        Network Dev : L3 Routing Table Data Structure
                      </a>
                      <a 
                        href="https://www.youtube.com/playlist?list=PLN9r3gitIiJ4avtTCCzmGeXSrTz-pH7x2" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent text-sm"
                      >
                        Network Dev : Construction of L3 Routing Table
                      </a>
                      <a 
                        href="https://www.youtube.com/playlist?list=PLN9r3gitIiJ6hO79_Vw79HP7ju4SoSGKn" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent text-sm"
                      >
                        Multithreading : Recursive Mutexes
                      </a>
                      <a 
                        href="https://www.youtube.com/playlist?list=PLN9r3gitIiJ7D1O3nCep-3sx9gMosLCcc" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent text-sm"
                      >
                        Multithreading : Thread Cancellation
                      </a>
                      <a 
                        href="https://www.youtube.com/playlist?list=PLN9r3gitIiJ5MlzhfYEVS3vtBqRd6Xznt" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent text-sm"
                      >
                        Multithreading : POSIX Threading
                      </a>
                      <a 
                        href="https://www.youtube.com/playlist?list=PLN9r3gitIiJ6XzyEsmrv34qwSap98TYXf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent text-sm"
                      >
                        Operating Systems : Heap Memory Management
                      </a>
                      <a 
                        href="https://www.youtube.com/playlist?list=PLN9r3gitIiJ6XuFzsCbP84MNtH_I78Tth" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent text-sm"
                      >
                        Multithreading : Semaphores
                      </a>
                      <a 
                        href="https://www.youtube.com/playlist?list=PLN9r3gitIiJ65fDDtjgKvc2RFqA78OykW" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent text-sm"
                      >
                        Linux System Programming : Linux Timers
                      </a>
                      <a 
                        href="https://www.youtube.com/playlist?list=PLN9r3gitIiJ5aHJn8qW3x4NCuVcdNhhRD" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent text-sm"
                      >
                        Data Structure : Offset of a Linked List
                      </a>
                      <a 
                        href="https://www.youtube.com/playlist?list=PLN9r3gitIiJ67Mru9fNUUb3BThF9dIZOA" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent text-sm"
                      >
                        Linux System Programming : IPC - Unix Domain Sockets
                      </a>
                      <a 
                        href="https://www.youtube.com/playlist?list=PLN9r3gitIiJ751TwsaWnppSSs93BJDgqR" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent text-sm"
                      >
                        Operating Systems : Stack Memory Management
                      </a>
                      <a 
                        href="https://www.youtube.com/playlist?list=PLN9r3gitIiJ6Kd8U-B9GtWvD5RABWoWci" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent text-sm"
                      >
                        Multithreading : Thread Pools
                      </a>
                      <a 
                        href="https://www.youtube.com/playlist?list=PLN9r3gitIiJ5MYm41p33sNEObe1S-g-cQ" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent text-sm"
                      >
                        Operating Systems : select System Call
                      </a>
                      <a 
                        href="https://www.youtube.com/playlist?list=PLlrqp8hxLfoqSIQFrGbAM5lv5uAnZBB61" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent rounded-b-md text-sm"
                      >
                        Linux System Programming : Device-Drivers Complete Playlist
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md"
            >
              Courses
            </button>
            <a
              href="https://www.csepracticals.com/recent-updates/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md"
            >
              Recent Updates
            </a>
            <button
              onClick={() => scrollToSection("blogs")}
              className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md"
            >
              Our Blogs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md"
            >
              Contact Us
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}
