
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Activity, DollarSign, Target, Clock } from "lucide-react";

const TradingInterface = () => {
  const recentTrades = [
    { symbol: "AAPL", type: "BUY", quantity: 100, price: 195.89, time: "10:32 AM", status: "Filled" },
    { symbol: "TSLA", type: "SELL", quantity: 50, price: 248.42, time: "10:28 AM", status: "Filled" },
    { symbol: "NVDA", type: "BUY", quantity: 25, price: 875.28, time: "10:15 AM", status: "Pending" },
  ];

  return (
    <section className="py-16 px-6" id="trading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-headline mb-4">Trading Interface</h2>
          <p className="text-muted-foreground">Execute trades with professional-grade tools</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Entry */}
          <Card className="card-elevated">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Place Order
              </h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Symbol</label>
                <Input placeholder="AAPL" className="bg-input border-border" />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-2">Quantity</label>
                  <Input placeholder="100" className="bg-input border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Price</label>
                  <Input placeholder="195.89" className="bg-input border-border" />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button className="btn-primary flex-1">Buy</Button>
                <Button variant="outline" className="flex-1 border-bear-red text-bear-red hover:bg-bear-red hover:text-white">
                  Sell
                </Button>
              </div>
            </div>
          </Card>

          {/* Market Stats */}
          <Card className="card-elevated">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Market Stats
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-surface-glass rounded-lg">
                <span className="text-muted-foreground">Portfolio Value</span>
                <span className="font-semibold text-lg">$127,543.89</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-surface-glass rounded-lg">
                <span className="text-muted-foreground">Day P&L</span>
                <span className="font-semibold text-lg price-up">+$2,341.23</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-surface-glass rounded-lg">
                <span className="text-muted-foreground">Buying Power</span>
                <span className="font-semibold text-lg">$45,678.90</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-surface-glass rounded-lg">
                <span className="text-muted-foreground">Open Orders</span>
                <span className="font-semibold text-lg">3</span>
              </div>
            </div>
          </Card>

          {/* Recent Trades */}
          <Card className="card-elevated">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Trades
              </h3>
            </div>
            
            <div className="space-y-3">
              {recentTrades.map((trade, index) => (
                <div key={index} className="p-3 bg-surface-glass rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={trade.type === 'BUY' ? 'default' : 'secondary'}
                        className={trade.type === 'BUY' ? 'bg-bull-green' : 'bg-bear-red'}
                      >
                        {trade.type}
                      </Badge>
                      <span className="font-medium">{trade.symbol}</span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={trade.status === 'Filled' ? 'border-bull-green text-bull-green' : 'border-neutral-yellow text-neutral-yellow'}
                    >
                      {trade.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{trade.quantity} shares @ ${trade.price}</span>
                    <span>{trade.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TradingInterface;
