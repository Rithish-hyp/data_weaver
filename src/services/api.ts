import axios from 'axios';

const NASA_API_KEY = 'DEMO_KEY'; // Using DEMO_KEY for simplicity, usually limited but fine for dev
const NASA_BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed';
const CRYPTO_API_URL = 'https://api.alternative.me/fng/';

export interface DailyData {
    date: string;
    asteroidCount: number;
    hazardousCount: number;
    fearGreedIndex: number;
    fearGreedLabel: string;
}

export const fetchDashboardData = async (): Promise<DailyData[]> => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);

    const formatDate = (date: Date) => date.toISOString().split('T')[0];

    try {
        // 1. Fetch NASA Data
        const nasaResponse = await axios.get(NASA_BASE_URL, {
            params: {
                start_date: formatDate(startDate),
                end_date: formatDate(endDate),
                api_key: NASA_API_KEY
            }
        });

        // 2. Fetch Crypto Data
        // Limit 10 to cover enough days
        const cryptoResponse = await axios.get(CRYPTO_API_URL, {
            params: { limit: 10 }
        });

        const neoData = nasaResponse.data.near_earth_objects;
        const cryptoData = cryptoResponse.data.data;

        // 3. Merge Data
        const mergedData: DailyData[] = [];

        // Loop through the Date range
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const dateStr = formatDate(d);

            // Process NASA for this date
            const daysAsteroids = neoData[dateStr] || [];
            const asteroidCount = daysAsteroids.length;
            const hazardousCount = daysAsteroids.filter((a: any) => a.is_potentially_hazardous_asteroid).length;

            // Process Crypto for this date (API returns timestamps)
            // We need to match the date. Crypto API returns data with 'timestamp' in seconds.
            // We just look for a generic match since timezones can be tricky.
            const cryptoEntry = cryptoData.find((c: any) => {
                const cDate = new Date(parseInt(c.timestamp) * 1000);
                return formatDate(cDate) === dateStr;
            });

            mergedData.push({
                date: dateStr,
                asteroidCount,
                hazardousCount,
                fearGreedIndex: cryptoEntry ? parseInt(cryptoEntry.value) : 50, // Default to neutral if missing
                fearGreedLabel: cryptoEntry ? cryptoEntry.value_classification : 'Unknown'
            });
        }

        return mergedData;

    } catch (error) {
        console.error("Error fetching data:", error);
        // Return mock data if API fails (fallback for demo/rate limits)
        return getMockData();
    }
};

const getMockData = (): DailyData[] => {
    const data = [];
    const today = new Date();
    for (let i = 7; i >= 0; i--) {
        const d = new Date();
        d.setDate(today.getDate() - i);
        data.push({
            date: d.toISOString().split('T')[0],
            asteroidCount: Math.floor(Math.random() * 15) + 5,
            hazardousCount: Math.floor(Math.random() * 3),
            fearGreedIndex: Math.floor(Math.random() * 100),
            fearGreedLabel: 'Mock Data'
        });
    }
    return data;
}
