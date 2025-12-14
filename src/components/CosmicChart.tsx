import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { DailyData } from '../services/api';
import { Card } from './ui/Card';

interface CosmicChartProps {
    data: DailyData[];
}

export const CosmicChart = ({ data }: CosmicChartProps) => {
    return (
        <Card className="h-[400px] w-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-cyan">
                Cosmic Threats vs. Market Fear
            </h3>

            <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorAsteroids" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ff00aa" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#ff00aa" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorFear" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#00f0ff" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e2445" />
                    <XAxis dataKey="date" stroke="#6b7280" tick={{ fill: '#9ca3af' }} />
                    <YAxis yAxisId="left" stroke="#ff00aa" label={{ value: 'Asteroids', angle: -90, position: 'insideLeft', fill: '#ff00aa' }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#00f0ff" label={{ value: 'Fear Index', angle: 90, position: 'insideRight', fill: '#00f0ff' }} />

                    <Tooltip
                        contentStyle={{ backgroundColor: '#0b0d17', borderColor: '#1e2445', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff' }}
                    />

                    <Area
                        type="monotone"
                        dataKey="asteroidCount"
                        yAxisId="left"
                        stroke="#ff00aa"
                        fillOpacity={1}
                        fill="url(#colorAsteroids)"
                        strokeWidth={3}
                        name="Asteroids"
                    />
                    <Area
                        type="monotone"
                        dataKey="fearGreedIndex"
                        yAxisId="right"
                        stroke="#00f0ff"
                        fillOpacity={1}
                        fill="url(#colorFear)"
                        strokeWidth={3}
                        name="Fear Index"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    );
};
