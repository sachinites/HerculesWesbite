import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

// Extract video ID from YouTube URL
const getYouTubeVideoId = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/);
  return match ? match[1] : null;
};

const videos = [
  {
    id: 1,
    title: "Develop Advanced Command Line Interface ( CLI ) Project in C/C++",
    youtubeUrl: "https://www.youtube.com/watch?v=CbNdB3tYec4",
    duration: "5:49",
  },
  {
    id: 2,
    title: "Linux Heap Memory Manager ( LMM ) - Operating System Project",
    youtubeUrl: "https://www.youtube.com/watch?v=oVUMAO-3SP8",
    duration: "1:19",
  },
  {
    id: 3,
    title: "Project : MathExpression Parser",
    youtubeUrl: "https://youtu.be/oVUMAO-3SP8",
    duration: "1:16",
  },
  {
    id: 4,
    title: "FireWall Project : Cisco Like Access Control List in C/C++",
    youtubeUrl: "https://youtu.be/jJ_05yXzUJc",
    duration: "1:37",
  },
  {
    id: 5,
    title: "RDBMS Project : Clone Implementation of Postgresql RDBMS in C",
    youtubeUrl: "https://youtu.be/nnSn15Vo7ko",
    duration: "1:33",
  },
  {
    id: 6,
    title: "Multithreading-Project : Thread Pool Design",
    youtubeUrl: "https://youtu.be/1ImviGN-haY",
    duration: "4:48",
  },
  {
    id: 7,
    title: "TCP Fast Re-Transmissions",
    youtubeUrl: "https://youtu.be/UVqDdhfzDQc",
    duration: "7:32",
  },
  {
    id: 8,
    title: "Networking Projects - Implement TCP/IP Stack in C/C++",
    youtubeUrl: "https://youtube.com/shorts/IGApUe_und4",
    duration: "0:51",
  },
  {
    id: 9,
    title: "Master Class TCP/IP Protocol",
    youtubeUrl: "https://youtu.be/6dBRRXhWjl8",
    duration: "3:33",
  },
  {
    id: 10,
    title: "TCP IP STACK explained with real world example",
    youtubeUrl: "https://youtu.be/PswmDjtWmMk",
    duration: "2:57",
  },
  {
    id: 11,
    title: "Final Year Project ( Or otherwise) - TCP IP Stack  in C",
    youtubeUrl: "https://youtu.be/K1aru7zMhWk",
    duration: "5:02",
  },
  {
    id: 12,
    title: "System Programming and Networking Development Courses",
    youtubeUrl: "https://youtube.com/shorts/kVn-AFTuCLw",
    duration: "0:53",
  },
].map(video => ({
  ...video,
  videoId: getYouTubeVideoId(video.youtubeUrl) || "",
  thumbnail: `https://img.youtube.com/vi/${getYouTubeVideoId(video.youtubeUrl)}/maxresdefault.jpg`
}));

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [mobileVideoIndex, setMobileVideoIndex] = useState(0);
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

  const nextMobileVideo = () => {
    setMobileVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevMobileVideo = () => {
    setMobileVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const currentVideos = videos.slice(
    currentIndex * videosPerSlide,
    (currentIndex + 1) * videosPerSlide
  );

  const handleVideoClick = (videoId: string) => {
    setPlayingVideoId(videoId);
  };

  const closePlayer = () => {
    setPlayingVideoId(null);
  };

  return (
    <section id="recent-updates" className="px-4 py-16 sm:px-6 lg:px-8 bg-card/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-1/3 w-72 h-72 bg-chart-2/30 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* YouTube Player Modal */}
      {playingVideoId && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" 
          onClick={closePlayer}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div 
            className="relative w-full max-w-6xl mx-4 px-4" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePlayer}
              className="absolute -top-12 right-4 text-white hover:text-primary transition-colors z-10"
              aria-label="Close video"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1&playsinline=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

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
                onClick={() => handleVideoClick(video.videoId)}
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
            <div 
              onClick={() => handleVideoClick(videos[mobileVideoIndex].videoId)}
              className="group relative rounded-lg overflow-hidden bg-background border-2 border-primary/20 active:border-primary transition-all active:shadow-2xl active:shadow-primary/40 cursor-pointer"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <div className="relative aspect-video bg-muted">
                <img
                  src={videos[mobileVideoIndex].thumbnail}
                  alt={videos[mobileVideoIndex].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary rounded-full blur-lg animate-pulse" />
                    <div className="relative h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm border border-white/20">
                  {videos[mobileVideoIndex].duration}
                </div>
              </div>
              <div className="p-4 bg-gradient-to-b from-background to-card">
                <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">{videos[mobileVideoIndex].title}</h3>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                onClick={prevMobileVideo}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setMobileVideoIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      mobileVideoIndex === index
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextMobileVideo}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
