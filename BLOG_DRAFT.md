# The Data Weaver: When Asteroids Meet Crypto

**Published on AWS Builder Center**

## The Problem
Data often lives in silos. We have excellent data on celestial bodies from NASA and granular financial data from markets. But do they interact? As a developer, I wanted to explore the "Butterfly Effect" on a cosmic scale: **Does the number of potentially hazardous asteroids passing Earth influence Bitcoin traders' fear levels?**

## The Solution
I built "The Data Weaver", a React-based dashboard that mashes up:
1.  **NASA NeoWs API**: Tracking Near-Earth Objects.
2.  **Crypto Fear & Greed Index**: Tracking market sentiment.

By visualizing these two distinct datasets on a dual-axis chart, we can look for amusing (or terrifying) correlations.

## How Kiro Accelerated Development
Kiro acted as my AI Co-pilot throughout this hackathon.
- **Instant Boilerplate**: Kiro set up the Vite + Tailwind environment in seconds.
- **Complex Logic**: I described the data merging logic ("Align NASA dates with Crypto timestamps"), and Kiro generated the `fetchDashboardData` service function, handling the date parsing nuances perfectly.
- **UI Polish**: The "Space/Cyberpunk" aesthetic was generated with Kiro's help, suggesting the color palette and glassmorphism CSS classes.

## Code Snippet: The Merge Logic
Here is how we normalize the disparate data sources:

```typescript
// src/services/api.ts
// Aligning NASA's YYYY-MM-DD with Crypto's Unix Timestamps
const cryptoEntry = cryptoData.find((c: any) => {
  const cDate = new Date(parseInt(c.timestamp) * 1000);
  return formatDate(cDate) === dateStr;
});
```

## Screenshots
*(Insert Screenshot of Dashboard Here)*

## Conclusion
"The Data Weaver" proves that with modern tools like React, Tailwind, and AI assistants like Kiro, we can build creative, data-driven applications in record time. Whether or not asteroids actually crash the market, building this dashboard was a blast.

**Links:**
- [GitHub Repository](Link)
- [Live Demo](Link)
