import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "wouter";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
}

export default function EventCard({ title, date, location, description, image }: EventCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-event-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col md:flex-row">
        {image && (
          <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold">
              {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>
        )}
        <div className="flex-1">
          <CardHeader>
            <h3 className="text-xl font-serif font-normal text-foreground mb-2">{title}</h3>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-4">{description}</p>
            <Link href="/events">
              <Button size="sm" data-testid={`button-rsvp-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                Learn More
              </Button>
            </Link>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
