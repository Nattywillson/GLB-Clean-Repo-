import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Users, Megaphone, DollarSign } from "lucide-react";
const heroImage = '/josefina.png';
const givingImage = '/assets/glb-logo.png';
const mentorshipImage = '/assets/josefina.png';
const advocacyImage = '/assets/glb-logo.png';

export default function Programs() {
  const programs = [
    {
      icon: Heart,
      title: "Giving Circles",
      description: "Our giving circles bring together groups of women who pool their resources to fund high-impact initiatives. Each circle focuses on specific causes or regions, enabling members to learn together, make collective decisions, and amplify their philanthropic impact.",
      image: givingImage,
      features: [
        "Collaborative decision-making on grant allocations",
        "Due diligence support and impact measurement",
        "Networking with like-minded philanthropists",
        "Educational opportunities and site visits"
      ]
    },
    {
      icon: Users,
      title: "Mentorship & Leadership Development",
      description: "Connect with experienced leaders for one-on-one mentorship, participate in leadership training programs, and access resources designed to help you grow as a leader and changemaker.",
      image: mentorshipImage,
      features: [
        "One-on-one mentorship matching",
        "Leadership workshops and seminars",
        "Peer learning circles and cohort programs",
        "Executive coaching opportunities"
      ]
    },
    {
      icon: Megaphone,
      title: "Advocacy Campaigns",
      description: "Join coordinated advocacy efforts to influence policy, change social norms, and advance women's rights. From local initiatives to global campaigns, your voice contributes to systemic change.",
      image: advocacyImage,
      features: [
        "Policy research and analysis",
        "Campaign strategy and coordination",
        "Media training and thought leadership",
        "Coalition building with partner organizations"
      ]
    },
    {
      icon: DollarSign,
      title: "Grants & Impact Investments",
      description: "We provide grants and impact investments to organizations and initiatives that demonstrate measurable outcomes in advancing women's economic empowerment, education, health, and leadership.",
      image: givingImage,
      features: [
        "Rigorous grantee selection process",
        "Multi-year funding commitments",
        "Capacity building and technical assistance",
        "Impact tracking and evaluation"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        image={heroImage}
        video="/assets/programs.mp4"
        title="Our Programs"
        subtitle="Strategic initiatives designed to mobilize resources, expertise, and influence to create lasting change for women and girls worldwide."
        showCTA={false}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
              data-testid={`section-program-${program.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="lg:w-1/2">
                <img
                  src={program.image}
                  alt={program.title}
                  className="rounded-md w-full h-auto object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-normal mb-4">
                  {program.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/get-involved">
                  <Button data-testid={`button-learn-more-${program.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn How to Participate
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6">
            Join a Program
          </h2>
          <p className="text-lg mb-8 opacity-95">
            Whether you want to give, mentor, advocate, or lead, there's a place for you in our community.
          </p>
          <Link href="/get-involved">
            <Button size="lg" variant="secondary" data-testid="button-cta-join-program">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
