import { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem('newsletter-modal-seen');
      if (!hasSeenModal) {
        setIsOpen(true);
      }
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setIsOpen(false);
    localStorage.setItem('newsletter-modal-seen', 'true');
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('newsletter-modal-seen', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <Mail className="mx-auto mb-4 text-primary" size={48} />
          <h2 className="text-2xl font-bold mb-2">Stay Connected</h2>
          <p className="text-gray-600">
            Join our community of women leaders and get updates on programs, events, and opportunities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="floating-label">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
            />
            <label>Your Email Address</label>
          </div>
          
          <Button type="submit" className="w-full ripple-button">
            Join Our Community
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterModal;