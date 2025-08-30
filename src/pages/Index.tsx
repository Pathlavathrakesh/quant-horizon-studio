
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarketOverview from "@/components/MarketOverview";
import TradingInterface from "@/components/TradingInterface";
import ChartAnalysis from "@/components/ChartAnalysis";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MarketOverview />
        <TradingInterface />
        <ChartAnalysis />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
