import { useRef, useEffect, useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

const OptimizedVideo = ({ 
  src, 
  poster, 
  className, 
  autoPlay = false, 
  muted = true, 
  loop = false,
  controls = false 
}: OptimizedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay={autoPlay && isInView}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline
      preload="none"
    >
      {isInView && <source src={src} type="video/mp4" />}
    </video>
  );
};

export default OptimizedVideo;