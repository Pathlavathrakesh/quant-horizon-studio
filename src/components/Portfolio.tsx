
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Target, PieChart as PieChartIcon } from "lucide-react";

const Portfolio = () => {
  const holdings = [
    { symbol: "AAPL", name: "Apple Inc.", shares: 150, value: 29383.50, allocation: 23.1, change: 2.45 },
    { symbol: "TSLA", name: "Tesla Inc.", shares: 75, value: 18631.50, allocation: 14.6, change: -1.23 },
    { symbol: "NVDA", name: "NVIDIA Corp.", shares: 35, value: 30634.80, allocation: 24.0, change: 3.21 },
    { symbol: "MSFT", name: "Microsoft Corp.", shares: 100, value: 37885.00, allocation: 29.7, change: 0.89 },
    { symbol: "GOOGL", name: "Alphabet Inc.", shares: 25, value: 10908.75, allocation: 8.6, change: 1.34 },
  ];

  const pieData = [
    { name: 'MSFT', value: 29.7, color: '#3B82F6' },
    { name: 'NVDA', value: 24.0, color: '#10B981' },
    { name: 'AAPL', value: 23.1, color: '#F59E0B' },
    { name: 'TSLA', value: 14.6, color: '#EF4444' },
    { name: 'GOOGL', value: 8.6, color: '#8B5CF6' },
  ];

  const totalValue = holdings.reduce((sum, holding) => sum + holding.value, 0);
  const totalChange = holdings.reduce((sum, holding) => sum + (holding.value * holding.change / 100), 0);
  const totalChangePercent = (totalChange / totalValue) * 100;

  return (
    <section className="py-16 px-6" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-headline mb-4">Portfolio Management</h2>
          <p className="text-muted-foreground">Track your investments and performance</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Portfolio Summary */}
          <Card className="card-elevated">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Portfolio Summary
              </h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold mb-2">
                  ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className={`flex items-center gap-2 ${totalChangePercent >= 0 ? 'price-up' : 'price-down'}`}>
                  {totalChangePercent >= 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span className="font-medium">
                    {totalChangePercent >= 0 ? '+' : ''}${totalChange.toFixed(2)} ({totalChangePercent >= 0 ? '+' : ''}{totalChangePercent.toFixed(2)}%)
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Gain/Loss</span>
                  <span className="font-medium price-up">+$12,543.89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Realized P&L</span>
                  <span className="font-medium">$8,234.56</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Unrealized P&L</span>
                  <span className="font-medium">$4,309.33</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Asset Allocation Chart */}
          <Card className="card-elevated">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <PieChartIcon className="h-5 w-5 text-primary" />
                Asset Allocation
              </h3>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Performance Metrics */}
          <Card className="card-elevated">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Performance
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-3 bg-surface-glass rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">1D Return</span>
                  <span className="font-semibold price-up">+1.85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>

              <div className="p-3 bg-surface-glass rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">1W Return</span>
                  <span className="font-semibold price-up">+3.42%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>

              <div className="p-3 bg-surface-glass rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">1M Return</span>
                  <span className="font-semibold price-down">-0.89%</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>

              <div className="p-3 bg-surface-glass rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">1Y Return</span>
                  <span className="font-semibold price-up">+18.76%</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
            </div>
          </Card>
        </div>

        {/* Holdings Table */}
        <Card className="card-elevated">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Current Holdings</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4">Symbol</th>
                  <th className="text-left py-3 px-4">Company</th>
                  <th className="text-right py-3 px-4">Shares</th>
                  <th className="text-right py-3 px-4">Value</th>
                  <th className="text-right py-3 px-4">Allocation</th>
                  <th className="text-right py-3 px-4">Change</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding) => (
                  <tr key={holding.symbol} className="border-b border-border/50 hover:bg-surface-glass/50 transition-colors">
                    <td className="py-4 px-4 font-medium">{holding.symbol}</td>
                    <td className="py-4 px-4 text-muted-foreground">{holding.name}</td>
                    <td className="py-4 px-4 text-right">{holding.shares}</td>
                    <td className="py-4 px-4 text-right font-medium">
                      ${holding.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className="py-4 px-4 text-right">{holding.allocation}%</td>
                    <td className={`py-4 px-4 text-right font-medium ${holding.change >= 0 ? 'price-up' : 'price-down'}`}>
                      {holding.change >= 0 ? '+' : ''}{holding.change}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Portfolio;
