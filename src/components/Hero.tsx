
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, BarChart3, PieChart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-display mb-6">
            Advanced Trading & Market Analysis Platform
          </h1>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto mb-8">
            Unlock the power of professional-grade financial analysis with real-time data, 
            advanced charting tools, and AI-powered insights for smarter trading decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary group">
              Start Trading Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-secondary">
              View Live Demo
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card-elevated text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-headline mb-3">Real-Time Data</h3>
            <p className="text-muted-foreground">
              Live market data with millisecond accuracy for informed trading decisions.
            </p>
          </div>

          <div className="card-elevated text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-bull flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-headline mb-3">Advanced Charts</h3>
            <p className="text-muted-foreground">
              Professional technical analysis tools with 50+ indicators and drawing tools.
            </p>
          </div>

          <div className="card-elevated text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-bear flex items-center justify-center">
              <PieChart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-headline mb-3">Portfolio Management</h3>
            <p className="text-muted-foreground">
              Comprehensive portfolio tracking with risk analysis and performance metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
