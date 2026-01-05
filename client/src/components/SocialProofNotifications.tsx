import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const notifications = [
  { name: 'Sarah', location: 'New York', action: 'joined our community' },
  { name: 'Maria', location: 'Mexico City', action: 'signed up for mentorship' },
  { name: 'Li Wei', location: 'Singapore', action: 'joined a giving circle' },
  { name: 'Amara', location: 'Lagos', action: 'registered for an event' },
  { name: 'Sophie', location: 'Paris', action: 'became a member' },
];

const SocialProofNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 4500);
    };

    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
      showNotification();
    }, 8000);

    // Show first notification after 5 seconds
    setTimeout(showNotification, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const notification = notifications[currentNotification];

  return (
    <div className="social-proof">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
        <Users size={20} className="text-white" />
      </div>
      <div>
        <p className="font-semibold text-sm">
          {notification.name} from {notification.location}
        </p>
        <p className="text-xs text-gray-600">{notification.action}</p>
      </div>
    </div>
  );
};

export default SocialProofNotifications;