import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const videos = [
  {
    id: 1,
    title: "Introduction to Linux System Programming",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "45:30",
  },
  {
    id: 2,
    title: "Mastering Multithreading in C",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "52:15",
  },
  {
    id: 3,
    title: "Building Network Applications from Scratch",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "38:42",
  },
  {
    id: 4,
    title: "Advanced Socket Programming",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "41:20",
  },
  {
    id: 5,
    title: "Process Synchronization Techniques",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "35:18",
  },
  {
    id: 6,
    title: "Building a Custom Linux Shell",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "48:55",
  },
  {
    id: 7,
    title: "Memory Management Deep Dive",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "43:12",
  },
  {
    id: 8,
    title: "Kernel Module Development",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "51:40",
  },
  {
    id: 9,
    title: "TCP/IP Protocol Suite Explained",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "39:25",
  },
  {
    id: 10,
    title: "Device Driver Development",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "47:33",
  },
  {
    id: 11,
    title: "Real-Time Linux Programming",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "44:18",
  },
  {
    id: 12,
    title: "Network Security Best Practices",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "36:50",
  },
];

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videosPerSlide = 6;
  const totalSlides = Math.ceil(videos.length / videosPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= totalSlides ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? totalSlides - 1 : prev - 1
    );
  };

  const currentVideos = videos.slice(
    currentIndex * videosPerSlide,
    (currentIndex + 1) * videosPerSlide
  );

  return (
    <section id="recent-updates" className="px-4 py-16 sm:px-6 lg:px-8 bg-card/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-1/3 w-72 h-72 bg-chart-2/30 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-2/10 border border-chart-2/30 backdrop-blur-sm mb-4">
            <Play className="h-4 w-4 text-chart-2" />
            <span className="text-sm text-chart-2 font-medium">Latest Content</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground via-chart-2 to-foreground bg-clip-text text-transparent">
            Featured Video Tutorials
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch our latest tutorials and masterclasses
          </p>
        </div>

        <div className="relative">
          {/* Desktop: Slider with 6 videos */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-6">
            {currentVideos.map((video, index) => (
              <div
                key={video.id}
                className="group relative rounded-lg overflow-hidden bg-background border-2 border-primary/20 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/40 cursor-pointer hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video bg-muted">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary rounded-full blur-lg animate-pulse" />
                      <div className="relative h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50">
                        <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm border border-white/20">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-b from-background to-card">
                  <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls - Desktop */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          </div>

          {/* Mobile: Show 1 video at a time with slider */}
          <div className="md:hidden relative">
            <div className="group relative rounded-lg overflow-hidden bg-background border-2 border-primary/20 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/40 cursor-pointer">
              <div className="relative aspect-video bg-muted">
                <img
                  src={videos[0].thumbnail}
                  alt={videos[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary rounded-full blur-lg animate-pulse" />
                    <div className="relative h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm border border-white/20">
                  {videos[0].duration}
                </div>
              </div>
              <div className="p-4 bg-gradient-to-b from-background to-card">
                <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">{videos[0].title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
