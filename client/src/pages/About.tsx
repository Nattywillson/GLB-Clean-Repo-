import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";


export default function About() {
  const leaders = [
    {
      name: "Dr. Natalie Willson",
      title: "Board Chair",
      image: "/assets/downloaded/natalie-willson.jpg",
      bio: "Former CEO with 25+ years in social impact investing"
    },
    {
      name: "Li Wei Chen",
      title: "Executive Director",
      image: "/assets/leader1.png",
      bio: "Global development expert and women's rights advocate"
    },
    {
      name: "Maria Rodriguez",
      title: "Director of Programs",
      image: "/assets/leader2.png",
      bio: "Philanthropic strategist focused on gender equality"
    },
    {
      name: "Fatima Al-Rashid",
      title: "Director of Advocacy",
      image: "/assets/leader3.png",
      bio: "Policy expert and international human rights lawyer"
    },
    {
      name: "Josefina Clark",
      title: "Head of Recruitment",
      image: "/assets/josefina.png",
      bio: "Talent acquisition specialist with 15+ years building diverse leadership teams globally"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        image="/assets/hero-image.png"
        video="/assets/women-smile.mp4"
        title="Our Mission"
        subtitle="To unite and empower women leaders worldwide to drive bold action, invest in equality, and create lasting impact for women and girls everywhere."
        showCTA={false}
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-8 text-center">
            Who We Are
          </h2>
          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Global Women Rising is an international community of visionary women leaders, changemakers, and philanthropists working together to accelerate gender equality and social progress. We believe in the transformative power of women's leadership and collective action.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through collaborative giving, mentorship, and advocacy, we direct resources and influence toward initiatives that empower women and girls globally. From economic opportunity to education, health to leadership development, we invest in solutions that create systemic change.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2010, we've grown from a small group of committed philanthropists to a global movement of over 15,000 members across 85 countries. Together, we've awarded more than $250 million in grants and impacted the lives of over 2 million women and girls.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-12 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {leaders.map((leader) => (
              <Card key={leader.name} className="text-center" data-testid={`card-leader-${leader.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src={leader.image} alt={leader.name} />
                      <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-serif font-normal">{leader.name}</h3>
                  <p className="text-sm text-primary font-medium">{leader.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-normal mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We envision a world where every woman and girl has the opportunity to reach her full potential, where gender equality is a reality, and where women's leadership drives positive change in every sector of society.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-normal mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Collective action amplifies individual impact</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Women's leadership transforms communities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Strategic philanthropy creates systemic change</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Diversity strengthens our movement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-normal mb-6">Annual Reports</h2>
          <p className="text-muted-foreground mb-8">
            Download our annual impact reports to learn more about our programs, financials, and the change we're creating together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" data-testid="button-download-2024">
              <Download className="w-4 h-4 mr-2" />
              2024 Impact Report
            </Button>
            <Button variant="outline" data-testid="button-download-2023">
              <Download className="w-4 h-4 mr-2" />
              2023 Impact Report
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
