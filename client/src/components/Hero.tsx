import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  showCTA?: boolean;
  video?: string;
}

export default function Hero({ image, title, subtitle, showCTA = true, video }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        {video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onError={(e) => console.log('Video error:', e)}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={image}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-5">
        <div className="animate-float-slow absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="animate-float-medium absolute bottom-32 left-16 w-24 h-24 bg-coral/20 rounded-full blur-lg"></div>
        <div className="animate-float-fast absolute top-1/2 right-1/3 w-16 h-16 bg-white/5 rounded-full blur-md"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white mb-8 animate-fade-in-up leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in-up animation-delay-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
            {showCTA && (
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
                <Link href="/get-involved">
                  <Button
                    size="lg"
                    className="bg-coral-500 hover:bg-coral-600 text-white border-0 px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300 shadow-xl"
                    data-testid="button-hero-get-involved"
                  >
                    Join Our Movement
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300"
                    data-testid="button-hero-learn-more"
                  >
                    Discover Our Impact
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
