
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, BarChart3, PieChart, Activity } from "lucide-react";

const ChartAnalysis = () => {
  const priceData = [
    { date: '9:30', price: 485.20, volume: 1200000 },
    { date: '10:00', price: 486.45, volume: 1850000 },
    { date: '10:30', price: 484.89, volume: 2100000 },
    { date: '11:00', price: 487.32, volume: 1750000 },
    { date: '11:30', price: 489.76, volume: 2300000 },
    { date: '12:00', price: 488.54, volume: 1650000 },
    { date: '12:30', price: 490.12, volume: 2450000 },
    { date: '1:00', price: 492.89, volume: 1950000 },
    { date: '1:30', price: 491.34, volume: 1800000 },
    { date: '2:00', price: 493.67, volume: 2200000 },
  ];

  const portfolioData = [
    { name: 'Technology', value: 45, amount: 57435 },
    { name: 'Healthcare', value: 20, amount: 25508 },
    { name: 'Finance', value: 15, amount: 19132 },
    { name: 'Energy', value: 12, amount: 15305 },
    { name: 'Consumer', value: 8, amount: 10204 },
  ];

  return (
    <section className="py-16 px-6" id="analysis">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-headline mb-4">Technical Analysis</h2>
          <p className="text-muted-foreground">Advanced charting and market insights</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Price Chart */}
          <Card className="card-elevated">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                SPY - Intraday Price
              </h3>
              <p className="text-caption">Real-time price movement with volume</p>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    domain={['dataMin - 1', 'dataMax + 1']}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Volume Chart */}
          <Card className="card-elevated">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-bull-green" />
                Trading Volume
              </h3>
              <p className="text-caption">Volume analysis and trends</p>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="volume" 
                    stroke="hsl(var(--bull-green))" 
                    fill="hsla(var(--bull-green), 0.3)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Technical Indicators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="data-card">
            <div className="flex items-center justify-between mb-3">
              <span className="text-caption">RSI (14)</span>
              <Activity className="h-4 w-4 text-neutral-yellow" />
            </div>
            <div className="text-2xl font-bold mb-1">67.34</div>
            <div className="text-sm text-neutral-yellow">Neutral</div>
          </Card>

          <Card className="data-card">
            <div className="flex items-center justify-between mb-3">
              <span className="text-caption">MACD</span>
              <TrendingUp className="h-4 w-4 text-bull-green" />
            </div>
            <div className="text-2xl font-bold mb-1">2.45</div>
            <div className="text-sm price-up">Bullish</div>
          </Card>

          <Card className="data-card">
            <div className="flex items-center justify-between mb-3">
              <span className="text-caption">Moving Avg</span>
              <TrendingUp className="h-4 w-4 text-bull-green" />
            </div>
            <div className="text-2xl font-bold mb-1">486.89</div>
            <div className="text-sm price-up">Above MA</div>
          </Card>

          <Card className="data-card">
            <div className="flex items-center justify-between mb-3">
              <span className="text-caption">Volatility</span>
              <Activity className="h-4 w-4 text-bear-red" />
            </div>
            <div className="text-2xl font-bold mb-1">18.7%</div>
            <div className="text-sm price-down">High</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChartAnalysis;
