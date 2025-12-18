import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-normal mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none">
            <p>Last updated: January 2025</p>
            <p>Global Women Rising is committed to protecting your privacy. This policy explains how we collect, use, and protect your information.</p>
            <p>For questions about this policy, contact us at privacy@globalwomenrising.org</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}