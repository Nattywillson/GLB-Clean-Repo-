import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-normal text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Page not found
        </p>
        <Link href="/">
          <Button data-testid="button-home">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
