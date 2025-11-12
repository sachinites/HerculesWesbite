import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collaborateOpen, setCollaborateOpen] = useState(false);
  const [playlistsOpen, setPlaylistsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("recent-updates")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Recent Updates
              </button>

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
                      <a href="#partnerships" className="block px-4 py-2 hover:bg-accent rounded-t-md">
                        Partnerships
                      </a>
                      <a href="#guest-lectures" className="block px-4 py-2 hover:bg-accent">
                        Guest Lectures
                      </a>
                      <a href="#contribute" className="block px-4 py-2 hover:bg-accent rounded-b-md">
                        Contribute Content
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("blogs")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Our Blogs
              </button>

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
                  <div className="absolute top-full pt-2 w-56">
                    <div className="rounded-md bg-popover border border-border shadow-lg">
                      <a href="#linux-programming" className="block px-4 py-2 hover:bg-accent rounded-t-md">
                        Linux System Programming
                      </a>
                      <a href="#networking" className="block px-4 py-2 hover:bg-accent">
                        Computer Networking
                      </a>
                      <a href="#multithreading" className="block px-4 py-2 hover:bg-accent">
                        Multithreading in C
                      </a>
                      <a href="#projects" className="block px-4 py-2 hover:bg-accent rounded-b-md">
                        Project Tutorials
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
            <button
              onClick={() => scrollToSection("recent-updates")}
              className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md"
            >
              Recent Updates
            </button>
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
