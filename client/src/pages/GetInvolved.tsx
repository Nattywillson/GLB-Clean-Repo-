import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, UserPlus, Calendar } from "lucide-react";


export default function GetInvolved() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch soon to discuss how you can get involved.",
    });
    setFormData({ name: "", email: "", interest: "", message: "" });
  };

  const ways = [
    {
      icon: Heart,
      title: "Join a Giving Circle",
      description: "Pool resources with other philanthropists to fund high-impact initiatives and learn together about effective giving.",
      cta: "Express Interest"
    },
    {
      icon: UserPlus,
      title: "Become a Mentor",
      description: "Share your expertise and experience with emerging leaders through our global mentorship program.",
      cta: "Apply as Mentor"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Contribute your skills and time to support our programs, events, and advocacy campaigns.",
      cta: "Volunteer Opportunities"
    },
    {
      icon: Calendar,
      title: "Host an Event",
      description: "Organize a local chapter meeting, fundraiser, or awareness event in your community.",
      cta: "Start Planning"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        image="/assets/hero-image.png"
        video="/assets/programs.mp4"
        title="Get Involved"
        subtitle="Join our global community of women leaders, changemakers, and philanthropists. There are many ways to contribute your time, expertise, and resources to advance gender equality."
        showCTA={false}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-12 text-center">
            Ways to Participate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ways.map((way) => (
              <Card key={way.title} className="p-8" data-testid={`card-way-${way.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <way.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-normal mb-3">{way.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {way.description}
                </p>
                <Button variant="outline" data-testid={`button-${way.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {way.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 text-center">
            Express Your Interest
          </h2>
          <p className="text-muted-foreground mb-12 text-center">
            Fill out the form below and we'll connect you with the right opportunities based on your interests and expertise.
          </p>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="interest">Area of Interest</Label>
                <Select
                  value={formData.interest}
                  onValueChange={(value) => setFormData({ ...formData, interest: value })}
                >
                  <SelectTrigger id="interest" data-testid="select-interest">
                    <SelectValue placeholder="Select your primary interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="giving-circle">Join a Giving Circle</SelectItem>
                    <SelectItem value="mentor">Become a Mentor</SelectItem>
                    <SelectItem value="volunteer">Volunteer</SelectItem>
                    <SelectItem value="host-event">Host an Event</SelectItem>
                    <SelectItem value="advocacy">Advocacy</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Tell Us More</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your background, interests, and how you'd like to contribute..."
                  rows={5}
                  data-testid="textarea-message"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" data-testid="button-submit">
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-normal mb-6">
            Questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our team is here to help you find the perfect way to contribute to our mission. Reach out anytime.
          </p>
          <Button variant="outline" size="lg" data-testid="button-contact-us">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
