# The Data Weaver Project Context

## Project Overview
This is a data mashup dashboard that explores correlations between **Near-Earth Object (Asteroid)** activity and **Crypto Market Sentiment**. The project combines astronomical data from NASA with financial sentiment data to create an engaging, cyberpunk-themed visualization.

## Architecture
- **Frontend**: React (Vite) + TypeScript
- **Styling**: TailwindCSS (Custom Space/Cyberpunk Theme)
- **Visualization**: Recharts (Dual-axis Area Charts)
- **Deployment**: GitHub Pages
- **APIs**: 
  - NASA NeoWs API (Asteroids)
  - Alternative.me API (Crypto Fear & Greed Index)

## Development Guidelines
- **Modularity**: Components are split into `ui` (Card) and feature-specific (CosmicChart) directories.
- **Type Safety**: Fully typed with TypeScript interfaces (`DailyData`).
- **Error Handling**: Graceful fallbacks for API failures (mock data generator).
- **Responsive Design**: Mobile-first layout with glassmorphism effects.
- **Performance**: Optimized re-renders and efficient data processing.

## Key Features
1. **Real-time Data**: Fetches latest 7 days of Asteroid and Crypto data.
2. **Dual-Axis Visualization**: Compares two distinct data scales on a single timeline.
3. **Insight Engine**: "Correlation Verdict" logic to detect amusing patterns.
4. **Interactive UI**: Hover effects, tooltips, and Framer Motion animations.
5. **Cyberpunk Aesthetic**: Neon gradients, dark mode, and glassmorphism.

## API Integration Notes
- **NASA NeoWs**: 
  - Rate limits apply (DEMO_KEY used).
  - Data structure requires flattened mapping from Date keys.
- **Crypto Fear & Greed**: 
  - Returns UNIX timestamps.
  - Requires normalization to match NASA's YYYY-MM-DD format.
- **Resilience**: Service layer handles merging and aligning diverse data structures.
