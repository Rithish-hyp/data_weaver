import { useEffect, useState } from 'react';
import { fetchDashboardData, DailyData } from './services/api';
import { CosmicChart } from './components/CosmicChart';
import { Card } from './components/ui/Card';
import { Rocket, TrendingUp, Skull, Zap } from 'lucide-react';

function App() {
    const [data, setData] = useState<DailyData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const result = await fetchDashboardData();
            setData(result);
            setLoading(false);
        };
        loadData();
    }, []);

    const latest = data[data.length - 1] || { asteroidCount: 0, hazardousCount: 0, fearGreedIndex: 0, fearGreedLabel: 'Loading...' };

    return (
        <div className="min-h-screen p-8 font-sans">
            <header className="mb-12 text-center">
                <h1 className="text-6xl font-black mb-4 tracking-tighter">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan animate-pulse-slow">
                        DATA WEAVER
                    </span>
                </h1>
                <p className="text-space-700 dark:text-gray-400 text-lg">
                    Is the Universe conspiring against your Crypto portfolio?
                </p>
            </header>

            <main className="max-w-6xl mx-auto space-y-8">
                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="flex flex-col items-center justify-center p-8 border-accent-pink/50">
                        <div className="p-3 bg-accent-pink/20 rounded-full mb-4">
                            <Rocket className="w-8 h-8 text-accent-pink" />
                        </div>
                        <span className="text-gray-400 text-sm uppercase tracking-wider">Asteroids Today</span>
                        <span className="text-4xl font-bold mt-2">{latest.asteroidCount}</span>
                        <span className="text-xs text-accent-pink mt-1">{latest.hazardousCount} Potentially Hazardous</span>
                    </Card>

                    <Card className="flex flex-col items-center justify-center p-8 border-accent-cyan/50">
                        <div className="p-3 bg-accent-cyan/20 rounded-full mb-4">
                            <TrendingUp className="w-8 h-8 text-accent-cyan" />
                        </div>
                        <span className="text-gray-400 text-sm uppercase tracking-wider">Crypto Mood</span>
                        <span className="text-4xl font-bold mt-2">{latest.fearGreedIndex}</span>
                        <span className="text-xs text-accent-cyan mt-1">{latest.fearGreedLabel}</span>
                    </Card>

                    <Card className="flex flex-col items-center justify-center p-8 border-accent-purple/50">
                        <div className="p-3 bg-accent-purple/20 rounded-full mb-4">
                            <Zap className="w-8 h-8 text-accent-purple" />
                        </div>
                        <span className="text-gray-400 text-sm uppercase tracking-wider">Correlation Verdict</span>
                        <span className="text-2xl font-bold mt-2 text-center">
                            {latest.fearGreedIndex < 30 && latest.hazardousCount > 0 ? "COSMIC DOOM DETECTED" : "Safe... for now"}
                        </span>
                    </Card>
                </div>

                {/* Main Chart */}
                {loading ? (
                    <Card className="h-[400px] flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-cyan"></div>
                    </Card>
                ) : (
                    <CosmicChart data={data} />
                )}
            </main>

            <footer className="mt-20 text-center text-gray-600 text-sm">
                Built for AI for Bharat • Powered by NASA & Alternative.me
            </footer>
        </div>
    );
}

export default App;
