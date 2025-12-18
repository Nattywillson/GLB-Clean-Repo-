import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import ProgramCard from "@/components/ProgramCard";
import MemberSpotlight from "@/components/MemberSpotlight";
import EventCard from "@/components/EventCard";
import StoryCard from "@/components/StoryCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Heart, Megaphone, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";



export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const metrics = [
    { value: "15,000+", label: "Members Worldwide" },
    { value: "$250M", label: "Grants Awarded" },
    { value: "85", label: "Countries Reached" },
    { value: "2M+", label: "Lives Impacted" },
  ];

  const programs = [
    {
      icon: Heart,
      title: "Giving Circles",
      description: "Join collaborative giving groups that pool resources to fund high-impact initiatives supporting women and girls globally.",
      link: "/programs",
      image: "/assets/downloaded/giving-circles.jpg",
    },
    {
      icon: Users,
      title: "Mentorship & Leadership",
      description: "Connect with experienced leaders for guidance, support, and professional development through our global mentorship network.",
      link: "/programs",
      image: "/assets/downloaded/mentorship-leadership.jpg",
    },
    {
      icon: Megaphone,
      title: "Advocacy",
      description: "Amplify your voice and drive systemic change through coordinated advocacy campaigns for gender equality and women's rights.",
      link: "/programs",
      image: "/assets/downloaded/advocacy-workshop.jpg",
    },
  ];

  const members = [
    {
      name: "Natalie Willson",
      title: "CEO, Tech Innovation Fund",
      location: "San Francisco, USA",
      quote: "Joining Global Women Rising connected me with incredible leaders who share my passion for empowering the next generation of women entrepreneurs.",
      image: "/assets/downloaded/natalie-willson.jpg"
    },
    {
      name: "Li Wei Chen",
      title: "Director of Social Impact",
      location: "Singapore",
      quote: "Through this community, I've found both mentors and mentees, creating a powerful network of support across continents.",
      image: "/assets/leader1.png"
    },
    {
      name: "Maria Rodriguez",
      title: "Philanthropist & Advocate",
      location: "Mexico City, Mexico",
      quote: "The collective giving circles have amplified our impact far beyond what I could achieve alone. Together, we're creating real change.",
      image: "/assets/leader2.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        image="/assets/hero-image.png"
        video="/assets/home.mp4"
        title="Empowering Women to Rise, Lead, and Thrive"
        subtitle="Global Women Rising is an international community of visionary women leaders, changemakers, and philanthropists accelerating gender equality through collective giving, mentorship, and advocacy."
      />

      <ImpactMetrics metrics={metrics} />

      {/* Video Background Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={"/assets/home.mp4"} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8">
              Transforming Lives Together
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Every day, women in our community are breaking barriers, creating opportunities, and lifting each other up. Join us in this powerful movement of change.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="animate-on-scroll bg-white/10 backdrop-blur-md rounded-xl p-8">
                <h3 className="text-3xl font-bold mb-2">15,000+</h3>
                <p className="text-white/90">Women Empowered</p>
              </div>
              <div className="animate-on-scroll bg-white/10 backdrop-blur-md rounded-xl p-8">
                <h3 className="text-3xl font-bold mb-2">85</h3>
                <p className="text-white/90">Countries Reached</p>
              </div>
              <div className="animate-on-scroll bg-white/10 backdrop-blur-md rounded-xl p-8">
                <h3 className="text-3xl font-bold mb-2">$250M</h3>
                <p className="text-white/90">Impact Created</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-6">
              Women Leading Change
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Witness the power of women coming together to create meaningful impact across the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-on-scroll hover:scale-105 transition-all duration-500 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src="/assets/downloaded/women-leadership.jpg" alt="Women in leadership" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Leadership Excellence</h3>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll hover:scale-105 transition-all duration-500 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src="/assets/downloaded/women-mentoring.jpg" alt="Women mentoring" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Mentorship Programs</h3>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll hover:scale-105 transition-all duration-500 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src="/assets/downloaded/women-empowerment.jpg" alt="Women empowerment" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Global Empowerment</h3>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll hover:scale-105 transition-all duration-500 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src="/assets/downloaded/women-networking.jpg" alt="Women networking" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Network Building</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Gallery Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="animate-on-scroll hover:scale-105 transition-all duration-500 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src="/assets/hero-image.png" alt="Women collaboration" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Collaborative Impact</h3>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll hover:scale-105 transition-all duration-500 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src="/assets/downloaded/women-supporting.jpg" alt="Women supporting women" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Supporting Each Other</h3>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll hover:scale-105 transition-all duration-500 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src="/assets/downloaded/women-leadership.jpg" alt="Best friends supporting each other" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Best Friends</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="animate-on-scroll hover:scale-105 transition-all duration-500 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src="/assets/downloaded/women-mentoring.jpg" alt="Women with love and support" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Love & Support</h3>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll hover:scale-105 transition-all duration-500 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <video className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" autoPlay muted loop>
                  <source src={"/assets/home.mp4"} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Women Together</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8">
              Our Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We mobilize resources, expertise, and influence to create lasting change through strategic programs designed to empower women and girls everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program, index) => (
              <div key={program.title} className="animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <MemberSpotlight members={members} />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-normal">
              Upcoming Events
            </h2>
            <Link href="/events">
              <Button variant="ghost" data-testid="button-view-all-events">
                View All →
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <EventCard
              title="Leadership Summit 2025"
              date="March 15, 2025"
              location="Virtual Event"
              description="Join us for our annual leadership summit featuring keynote speakers, breakout sessions, and networking opportunities."
              image="/assets/downloaded/advocacy.jpg"
            />
            <EventCard
              title="Giving Circle Workshop"
              date="March 22, 2025"
              location="New York, USA"
              description="Learn how to start or join a giving circle and maximize your philanthropic impact through collective action."
              image="/assets/downloaded/mentorship-leadership.jpg"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-normal">
              Latest Stories
            </h2>
            <Link href="/stories">
              <Button variant="ghost" data-testid="button-view-all-stories">
                View All →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StoryCard
              title="Empowering Women Entrepreneurs in Rural Communities"
              excerpt="How our giving circles funded microloans that transformed an entire village's economy."
              category="Impact Story"
              date="February 10, 2025"
              image="/assets/downloaded/giving-circles.jpg"
              slug="empowering-women-entrepreneurs"
            />
            <StoryCard
              title="Meet Our 2025 Mentorship Program Cohort"
              excerpt="Introducing the inspiring leaders joining our global mentorship network this year."
              category="Member Spotlight"
              date="January 28, 2025"
              image="/assets/downloaded/mentorship-leadership.jpg"
              slug="2025-mentorship-cohort"
            />
            <StoryCard
              title="Advocacy Wins: Policy Changes for Equal Pay"
              excerpt="Our coordinated advocacy efforts led to new legislation in three countries."
              category="Advocacy"
              date="January 15, 2025"
              image="/assets/downloaded/advocacy.jpg"
              slug="advocacy-wins-equal-pay"
            />
          </div>
        </div>
      </section>

      {/* Video Stories Section */}
      <section className="py-32 bg-gradient-to-b from-white to-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8">
              Stories in Motion
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Experience the transformative power of our community through these inspiring video stories of women supporting women.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-on-scroll hover:scale-105 transition-all duration-500 group">
              <video 
                className="w-full h-80 object-cover" 
                controls 
                poster="/assets/downloaded/giving-circles.jpg"
              >
                <source src={"/assets/home.mp4"} type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Empowering Rural Women</h3>
                <p className="text-white/90">How microfinance changed entire communities across Africa</p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-on-scroll hover:scale-105 transition-all duration-500 group">
              <video 
                className="w-full h-80 object-cover" 
                controls 
                poster="/assets/downloaded/women-supporting.jpg"
              >
                <source src={"/assets/home.mp4"} type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Leadership Summit 2024</h3>
                <p className="text-white/90">Highlights from our annual gathering of changemakers</p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-on-scroll hover:scale-105 transition-all duration-500 group">
              <video 
                className="w-full h-80 object-cover" 
                controls 
                poster="/assets/downloaded/women-networking.jpg"
              >
                <source src={"/assets/home.mp4"} type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-semibold text-xl mb-2">Mentorship in Action</h3>
                <p className="text-white/90">See how our mentorship program transforms lives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-40 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={"/assets/home.mp4"} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-coral-500/80 via-primary/70 to-coral-600/80" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 z-5">
          <div className="animate-float-slow absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="animate-float-medium absolute bottom-32 left-16 w-32 h-32 bg-coral-300/20 rounded-full blur-xl"></div>
          <div className="animate-float-fast absolute top-1/2 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-6xl md:text-7xl font-serif font-light mb-8 text-white leading-tight">
              Ready to Rise Together?
            </h2>
            <p className="text-2xl mb-12 text-white/95 max-w-4xl mx-auto leading-relaxed">
              Join our global sisterhood of women leaders, changemakers, and philanthropists. Together, we can create lasting change for women and girls everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/get-involved">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl" 
                  data-testid="button-cta-get-involved"
                >
                  Join Our Movement
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 px-10 py-6 text-xl font-semibold hover:scale-105 transition-all duration-300"
                >
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
