import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { fetchFeeRates } from '../services/rebarDataService';

interface FeeRate {
  priority: string;
  satsPerVbyte: number;
  estimatedTime: string;
}

const FeeRateChart: React.FC = () => {
  const [feeRates, setFeeRates] = useState<FeeRate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const getFeeRates = async () => {
      try {
        setLoading(true);
        const data = await fetchFeeRates();
        // Transform data as needed
        const transformedData: FeeRate[] = [
          { priority: 'High', satsPerVbyte: data.highFee, estimatedTime: '10-20 minutes' },
          { priority: 'Medium', satsPerVbyte: data.mediumFee, estimatedTime: '30-60 minutes' },
          { priority: 'Low', satsPerVbyte: data.lowFee, estimatedTime: '1-2 hours' }
        ];
        setFeeRates(transformedData);
      } catch (err) {
        setError('Failed to fetch fee rates');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getFeeRates();
  }, []);

  useEffect(() => {
    if (!loading && !error && feeRates.length > 0) {
      renderChart();
    }
  }, [feeRates, loading, error]);

  const renderChart = () => {
    if (!svgRef.current) return;

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove();

    const width = 600;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X scale
    const xScale = d3
      .scaleBand()
      .domain(feeRates.map(d => d.priority))
      .range([0, innerWidth])
      .padding(0.2);

    // Y scale
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(feeRates, d => d.satsPerVbyte) || 0])
      .nice()
      .range([innerHeight, 0]);

    // Draw bars
    g.selectAll('.bar')
      .data(feeRates)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.priority) || 0)
      .attr('y', d => yScale(d.satsPerVbyte))
      .attr('width', xScale.bandwidth())
      .attr('height', d => innerHeight - yScale(d.satsPerVbyte))
      .attr('fill', d => {
        if (d.priority === 'High') return '#ff8c00';
        if (d.priority === 'Medium') return '#3498db';
        return '#2ecc71';
      });

    // X axis
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale))
      .append('text')
      .attr('fill', '#000')
      .attr('x', innerWidth / 2)
      .attr('y', 35)
      .attr('text-anchor', 'middle')
      .text('Priority Level');

    // Y axis
    g.append('g')
      .call(d3.axisLeft(yScale))
      .append('text')
      .attr('fill', '#000')
      .attr('transform', 'rotate(-90)')
      .attr('y', -45)
      .attr('x', -innerHeight / 2)
      .attr('text-anchor', 'middle')
      .text('Fee Rate (sats/vbyte)');

    // Title
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', margin.top / 2)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .text('Bitcoin Fee Rate Recommendations');
  };

  if (loading) return <div>Loading fee rate data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="fee-rate-chart">
      <svg ref={svgRef}></svg>
      <div className="chart-legend">
        {feeRates.map(rate => (
          <div key={rate.priority} className="legend-item">
            <span className="priority">{rate.priority}:</span>
            <span className="fee">{rate.satsPerVbyte} sats/vbyte</span>
            <span className="time">({rate.estimatedTime})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeRateChart;
