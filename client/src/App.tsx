import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import Impact from "@/pages/Impact";
import GetInvolved from "@/pages/GetInvolved";
import Events from "@/pages/Events";
import Stories from "@/pages/Stories";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programs" component={Programs} />
      <Route path="/impact" component={Impact} />
      <Route path="/get-involved" component={GetInvolved} />
      <Route path="/events" component={Events} />
      <Route path="/stories" component={Stories} />
      <Route path="/stories/:slug" component={Stories} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/admin" component={Admin} />
      <Route path="/terms" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
