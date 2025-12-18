import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function Events() {
  const upcomingEvents = [
    {
      title: "Global Women Rising Leadership Summit 2025",
      date: "March 15-17, 2025",
      location: "Virtual & Hybrid Event",
      description: "Our flagship three-day summit brings together 2,000+ women leaders worldwide. Features keynote speeches from Nobel laureates, interactive workshops on strategic philanthropy, panel discussions on gender equality innovations, and exclusive networking sessions. Join us for transformative conversations that shape the future of women's leadership globally.",
      image: "/assets/GLB-Events1.png"
    },
    {
      title: "Giving Circle Mastery Workshop",
      date: "March 22, 2025",
      location: "New York, USA",
      description: "Intensive full-day workshop designed for both new and experienced philanthropists. Learn advanced strategies for collective giving, due diligence processes, impact measurement, and building sustainable giving communities. Includes hands-on exercises, case studies from successful giving circles, and networking lunch with established circle leaders.",
      image: "/assets/GLB-Events2.png"
    },
    {
      title: "Women in Tech Mentorship Program Launch",
      date: "April 5, 2025",
      location: "San Francisco, USA",
      description: "Exclusive launch event for our groundbreaking mentorship program connecting 500 emerging women technologists with C-suite executives from leading tech companies. Features fireside chats with industry pioneers, breakout sessions on career advancement strategies, and the official mentor-mentee matching ceremony.",
      image: "/assets/GLB-Events3.png"
    },
    {
      title: "Global Impact Storytelling Series",
      date: "April 12, 2025",
      location: "Virtual Event",
      description: "Monthly virtual series featuring powerful stories from our grantee organizations worldwide. Each session highlights transformative projects, showcases measurable impact data, and provides insights into effective program implementation. Interactive Q&A sessions allow direct engagement with project leaders and beneficiaries.",
      image: "/assets/downloaded/mentorship-leadership.jpg"
    },
    {
      title: "Climate Action & Women's Leadership Forum",
      date: "May 18, 2025",
      location: "Copenhagen, Denmark",
      description: "International forum addressing the intersection of climate change and gender equality. Features presentations from women-led environmental organizations, policy discussions with government leaders, and collaborative sessions on funding climate solutions. Includes site visits to innovative sustainability projects led by women entrepreneurs.",
      image: "/assets/downloaded/climate-action-forum.jpg"
    },
    {
      title: "Advocacy Bootcamp: Policy Change Strategies",
      date: "June 8-9, 2025",
      location: "Washington D.C., USA",
      description: "Intensive two-day bootcamp for members interested in policy advocacy and systemic change. Covers legislative processes, coalition building, media engagement, and grassroots organizing. Includes meetings with congressional representatives, strategy sessions with policy experts, and hands-on advocacy simulation exercises.",
      image: "/assets/downloaded/women-supporting.jpg"
    }

  ];

  const pastEvents = [
    {
      title: "Annual Impact Gala 2024: Celebrating Change",
      date: "December 10, 2024",
      location: "London, UK",
      description: "Our most successful gala to date brought together 800 global leaders, philanthropists, and changemakers. The evening featured inspiring speeches from Nobel Peace Prize winner Malala Yousafzai and raised $3.2M for women's empowerment initiatives. Highlights included the presentation of our annual Impact Awards to outstanding grantee organizations and a live auction featuring unique experiences donated by our members.",
      image: "/assets/downloaded/leadership-summit.jpg"
    },
    {
      title: "Global Advocacy Workshop Series",
      date: "November 2024",
      location: "Virtual Event",
      description: "Comprehensive four-part workshop series on effective advocacy strategies for gender equality reached 1,500 participants across 65 countries. Sessions covered policy analysis, coalition building, digital advocacy, and measuring advocacy impact. Featured guest speakers included former UN Women executives and successful policy advocates from various regions.",
      image: "/assets/downloaded/Global-Advocacy.jpg"
    },
    {
      title: "Women's Economic Empowerment Conference",
      date: "October 15-16, 2024",
      location: "Nairobi, Kenya",
      description: "Two-day conference focused on economic opportunities for women in emerging markets. Brought together 400 participants including entrepreneurs, investors, and development professionals. Featured marketplace showcasing women-led businesses, investor pitch sessions, and policy roundtables with government officials from 12 African nations.",
      image: "/assets/downloaded/Women-Conference.jpg"
    },
    {
      title: "Mentorship Program Graduation Ceremony",
      date: "September 20, 2024",
      location: "Toronto, Canada",
      description: "Celebration of our 2024 mentorship cohort featuring 300 mentor-mentee pairs from around the world. The ceremony included success story presentations, networking sessions, and the launch of our alumni network. Graduates reported average career advancement of 2.3 levels and 40% salary increases within the program year.",
      image: "/assets/downloaded/mentorship-leadership.jpg"
    },
    {
      title: "Digital Innovation for Social Impact Summit",
      date: "August 12, 2024",
      location: "Singapore",
      description: "One-day summit exploring how technology can accelerate gender equality initiatives. Featured demonstrations of AI-powered solutions for women's safety, blockchain applications for financial inclusion, and digital platforms for education access. Included startup pitch competition with $500K in prizes for women-led tech social enterprises.",
      image: "/assets/downloaded/women-networking.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        image="/assets/hero-image.png"
        video="/assets/gathering.mp4"
        title="Events & Gatherings"
        subtitle="Connect with fellow members, learn from experts, and engage with our global community through virtual and in-person events throughout the year."
        showCTA={false}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming" data-testid="tab-upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past" data-testid="tab-past">Past Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="space-y-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.title} {...event} />
              ))}
            </TabsContent>
            
            <TabsContent value="past" className="space-y-6">
              {pastEvents.map((event) => (
                <EventCard key={event.title} {...event} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
