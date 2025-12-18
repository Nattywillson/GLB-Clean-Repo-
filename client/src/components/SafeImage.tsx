import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

export default function SafeImage({ src, alt, fallback = '/assets/glb-logo.png', className }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallback);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}