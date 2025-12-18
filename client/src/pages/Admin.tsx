import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageManager from "@/components/ImageManager";

export default function Admin() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-normal mb-4">
              Admin Panel
            </h1>
            <p className="text-lg text-muted-foreground">
              Manage your website content and images
            </p>
          </div>
          
          <ImageManager />
        </div>
      </section>

      <Footer />
    </div>
  );
}