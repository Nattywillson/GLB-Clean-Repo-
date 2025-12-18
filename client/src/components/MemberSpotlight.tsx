import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Member {
  name: string;
  title: string;
  location: string;
  quote: string;
  image: string;
}

interface MemberSpotlightProps {
  members: Member[];
}

export default function MemberSpotlight({ members }: MemberSpotlightProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const currentMember = members[currentIndex];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-normal text-center mb-12">
          Member Voices
        </h2>

        <Card className="max-w-4xl mx-auto p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <Avatar className="w-32 h-32 md:w-40 md:h-40">
                <AvatarImage src={currentMember.image} alt={currentMember.name} />
                <AvatarFallback>{currentMember.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed">
                "{currentMember.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{currentMember.name}</p>
                <p className="text-sm text-muted-foreground">{currentMember.title}</p>
                <p className="text-sm text-muted-foreground">{currentMember.location}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              size="icon"
              variant="outline"
              onClick={prevSlide}
              data-testid="button-spotlight-prev"
              aria-label="Previous member"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {members.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  data-testid={`button-spotlight-dot-${index}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={nextSlide}
              data-testid="button-spotlight-next"
              aria-label="Next member"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
