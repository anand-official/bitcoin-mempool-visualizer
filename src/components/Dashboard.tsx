import React from 'react';
import styled from 'styled-components';
import FeeRateChart from './FeeRateChart';

const DashboardContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: 30px;
  text-align: center;
`;

const Title = styled.h1`
  color: #1a1a1a;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  color: #555;
  font-size: 1.2rem;
`;

const VisualizationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const VisualizationCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Header>
        <Title>Bitcoin Mempool Visualization Tool</Title>
        <Subtitle>Real-time insights into Bitcoin transaction behavior</Subtitle>
      </Header>

      <VisualizationGrid>
        <VisualizationCard>
          <h2>Fee Rate Recommendations</h2>
          <FeeRateChart />
        </VisualizationCard>
        
        <VisualizationCard>
          <h2>Transaction Volume Timeline</h2>
          <p>Transaction volume chart will go here</p>
          {/* Add TransactionVolumeChart component here when created */}
        </VisualizationCard>
        
        <VisualizationCard>
          <h2>Mempool Health Indicators</h2>
          <p>Mempool health visualization will go here</p>
          {/* Add MempoolHealthChart component here when created */}
        </VisualizationCard>
        
        <VisualizationCard>
          <h2>Confirmation Time Predictor</h2>
          <p>Confirmation time prediction tool will go here</p>
          {/* Add ConfirmationPredictor component here when created */}
        </VisualizationCard>
      </VisualizationGrid>
    </DashboardContainer>
  );
};

export default Dashboard;
