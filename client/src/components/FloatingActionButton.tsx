import { ArrowUp } from 'lucide-react';

const FloatingActionButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fab ripple-button"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default FloatingActionButton;