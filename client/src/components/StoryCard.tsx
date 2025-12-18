import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface StoryCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
  slug: string;
}

export default function StoryCard({ title, excerpt, category, date, image, slug }: StoryCardProps) {
  return (
    <Link href={`/stories/${slug}`}>
      <Card className="overflow-hidden hover-elevate h-full" data-testid={`card-story-${slug}`}>
        {image && (
          <div className="h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" data-testid={`badge-category-${category.toLowerCase()}`}>{category}</Badge>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <h3 className="text-xl font-serif font-normal text-foreground line-clamp-2">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
