import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  image?: string;
}

export default function ProgramCard({ icon: Icon, title, description, link, image }: ProgramCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate group hover:scale-105 hover:shadow-xl transition-all duration-300" data-testid={`card-program-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {image && (
        <div className="h-48 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <CardHeader>
        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-2xl font-serif font-normal text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-base text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Link href={link}>
          <Button variant="ghost" className="p-0 h-auto text-primary hover:translate-x-2 transition-transform duration-300" data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            Learn More →
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
