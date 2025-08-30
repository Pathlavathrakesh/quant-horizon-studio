
import { Button } from "@/components/ui/button";
import { Menu, TrendingUp, User, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="glass border-b border-border/50 px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold">QuantHorizon</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#trading" className="text-foreground hover:text-primary transition-colors">
            Trading
          </a>
          <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="#analysis" className="text-foreground hover:text-primary transition-colors">
            Analysis
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-5 w-5" />
          </Button>
          <Button className="btn-primary">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
