# Bitcoin-Mempool-Visualizer
Bitcoin Mempool Visualization Tool for Bitcoin 2025 Hackathon 

A real-time dashboard for Bitcoin mempool analysis and fee optimization, developed for the Bitcoin 2025 Hackathon.

## Project Overview

This Bitcoin Mempool Visualization Tool provides real-time insights into Bitcoin transaction behavior, fee optimization, and confirmation time predictions using Rebar Data APIs. The tool helps users understand mempool dynamics and make informed decisions about their Bitcoin transactions.

## Features

- **Fee Rate Analysis Dashboard**
  - Visual representation of current optimal fee rates
  - Historical fee rate trends
  - Fee rate recommendations based on urgency

- **Transaction Volume Timeline**
  - Track transaction volume over time
  - Identify patterns and trends in network activity

- **Mempool Health Indicators**
  - At-a-glance network congestion indicators
  - Predictive congestion forecasting
  - Block space utilization metrics

- **Confirmation Time Predictor**
  - Personalized confirmation time estimates
  - Fee optimization suggestions
  - Transaction priority visualization

## Technical Stack

- **Frontend**: React.js with TypeScript
- **Visualization**: D3.js
- **Styling**: Styled-components
- **UI Components**: Material-UI
- **Routing**: React Router
- **API Integration**: Axios for Rebar Data API connections

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/anand-official/bitcoin-mempool-visualizer.git
   cd bitcoin-mempool-visualizer
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with your Rebar Data API key:
   ```
   REACT_APP_REBAR_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```
   npm start
   ```

## Project Structure

- `/src/components`: React components for the dashboard
- `/src/services`: API services for data fetching
- `/src/utils`: Utility functions for data processing
- `/src/hooks`: Custom React hooks
- `/src/styles`: CSS and styling files

## Usage Examples

### Fee Rate Optimization
Use the Fee Rate Analysis dashboard to determine the optimal fee for your transaction based on desired confirmation time.

### Network Congestion Monitoring
Check the Mempool Health Indicators to understand current network conditions and plan transactions accordingly.

### Transaction Planning
Utilize the Confirmation Time Predictor to estimate when your transaction will confirm at different fee rates.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built for the Bitcoin 2025 Hackathon
- Powered by Rebar Data APIs
- Inspired by the need for better fee optimization tools in the Bitcoin ecosystem

## Contact

Project Link: [https://github.com/anand-official/bitcoin-mempool-visualizer](https://github.com/anand-official/bitcoin-mempool-visualizer)

