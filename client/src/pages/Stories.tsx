import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";


export default function Stories() {
  const [searchTerm, setSearchTerm] = useState("");

  const stories = [
    {
      title: "Empowering Women Entrepreneurs in Rural Communities",
      excerpt: "How our giving circles funded microloans that transformed an entire village's economy and created sustainable opportunities for women-led businesses.",
      category: "Impact Story",
      date: "February 10, 2025",
      image: "/assets/downloaded/giving-circles.jpg",
      slug: "empowering-women-entrepreneurs"
    },
    {
      title: "Meet Our 2025 Mentorship Program Cohort",
      excerpt: "Introducing the inspiring leaders joining our global mentorship network this year and their stories of resilience and vision.",
      category: "Member Spotlight",
      date: "January 28, 2025",
      image: "/assets/downloaded/mentorship-leadership.jpg",
      slug: "2025-mentorship-cohort"
    },
    {
      title: "Advocacy Wins: Policy Changes for Equal Pay",
      excerpt: "Our coordinated advocacy efforts led to new legislation in three countries, advancing equal pay for equal work.",
      category: "Advocacy",
      date: "January 15, 2025",
      image: "/assets/downloaded/advocacy.jpg",
      slug: "advocacy-wins-equal-pay"
    },
    {
      title: "From Refugee to Tech Leader: Amina's Journey",
      excerpt: "A member's inspiring story of overcoming adversity through education and mentorship to become a successful technology entrepreneur.",
      category: "Member Spotlight",
      date: "December 20, 2024",
      image: "/assets/downloaded/women-empowerment.jpg",
      slug: "amina-journey"
    },
    {
      title: "Investing in Girls' Education Across Africa",
      excerpt: "A deep dive into our scholarship program that has enabled 5,000 girls to complete their education and pursue higher learning.",
      category: "Impact Story",
      date: "December 5, 2024",
      image: "/assets/downloaded/women-networking.jpg",
      slug: "investing-girls-education"
    },
    {
      title: "Building a Coalition for Reproductive Rights",
      excerpt: "How our advocacy network partnered with 50 organizations to protect and advance reproductive healthcare access.",
      category: "Advocacy",
      date: "November 18, 2024",
      image: "/assets/downloaded/women-supporting.jpg",
      slug: "reproductive-rights-coalition"
    },
    {
      title: "Women in STEM: Breaking Barriers Together",
      excerpt: "Celebrating the achievements of women in science, technology, engineering, and mathematics through our scholarship and mentorship programs.",
      category: "Impact Story",
      date: "October 30, 2024",
      image: "/assets/downloaded/women-networking.jpg",
      slug: "women-in-stem"
    },
    {
      title: "Global Summit: Uniting Women Leaders Worldwide",
      excerpt: "Highlights from our annual summit where 500+ women leaders gathered to share insights, build partnerships, and plan for the future.",
      category: "Events",
      date: "October 15, 2024",
      image: "/assets/downloaded/leadership-summit.jpg",
      slug: "global-summit-2024"
    },
    {
      title: "Supporting Women Through Crisis: Ukraine Initiative",
      excerpt: "How our emergency response fund provided critical support to women and families affected by conflict, ensuring safety and stability.",
      category: "Impact Story",
      date: "September 28, 2024",
      image: "/assets/downloaded/women-empowerment.jpg",
      slug: "ukraine-initiative"
    }
  ];

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        image="/assets/hero-image.png"
        video="/assets/gathering.mp4"
        title="Stories & News"
        subtitle="Discover the latest updates, member spotlights, and impact stories from our global community of women leaders and changemakers."
        showCTA={false}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search-stories"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <StoryCard key={story.slug} {...story} />
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No stories found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
