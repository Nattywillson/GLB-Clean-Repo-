import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-mission">
                    Our Mission
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-team">
                    Leadership Team
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/impact">
                  <span className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-impact">
                    Annual Reports
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs">
                  <span className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-giving">
                    Giving Circles
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <span className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-mentorship">
                    Mentorship
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <span className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-advocacy">
                    Advocacy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <span className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-grants">
                    Grants & Investments
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/careers?filter=Volunteer">
                  <span className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-volunteer">
                    Volunteer
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/get-involved">
                  <span className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-mentor">
                    Become a Mentor
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <span className="text-sm text-background/80 hover:text-background transition-colors" data-testid="link-footer-events">
                    Events
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Stay Connected</h3>
            <p className="text-sm text-background/80 mb-4">
              Subscribe to our newsletter for updates and stories.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" variant="secondary" className="w-full" data-testid="button-newsletter-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a href="https://www.facebook.com/globalwomenrising" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background" data-testid="link-social-facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background" data-testid="link-social-twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background" data-testid="link-social-instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background" data-testid="link-social-linkedin">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-background/80">
            <Link href="/contact">
              <span className="hover:text-background transition-colors" data-testid="link-footer-contact">Contact</span>
            </Link>
            <span>•</span>
            <Link href="/privacy">
              <span className="hover:text-background transition-colors" data-testid="link-footer-privacy">Privacy Policy</span>
            </Link>
            <span>•</span>
            <Link href="/terms">
              <span className="hover:text-background transition-colors" data-testid="link-footer-terms">Terms of Use</span>
            </Link>
          </div>

          <p className="text-sm text-background/60">
            © 2025 Global Women Rising. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
