
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const MarketOverview = () => {
  const marketData = [
    { symbol: "SPY", name: "S&P 500 ETF", price: 485.73, change: 2.45, changePercent: 0.51 },
    { symbol: "QQQ", name: "Nasdaq ETF", price: 392.85, change: -1.23, changePercent: -0.31 },
    { symbol: "AAPL", name: "Apple Inc.", price: 195.89, change: 3.21, changePercent: 1.67 },
    { symbol: "TSLA", name: "Tesla Inc.", price: 248.42, change: -5.67, changePercent: -2.23 },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 875.28, change: 12.45, changePercent: 1.44 },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 378.85, change: 1.89, changePercent: 0.50 },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-headline mb-4">Market Overview</h2>
          <p className="text-muted-foreground">Real-time market data and trending securities</p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {marketData.map((stock) => (
            <Card key={stock.symbol} className="data-card hover:border-primary/50 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{stock.symbol}</h3>
                  <p className="text-caption">{stock.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">${stock.price}</p>
                  <div className={`flex items-center gap-1 ${
                    stock.change >= 0 ? 'price-up' : 'price-down'
                  }`}>
                    {stock.change >= 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span className="font-medium">
                      {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%)
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-border/50 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    stock.change >= 0 ? 'bg-bull-green' : 'bg-bear-red'
                  }`}
                  style={{ width: `${Math.min(Math.abs(stock.changePercent) * 20, 100)}%` }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;
