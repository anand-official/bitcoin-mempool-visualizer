import axios from 'axios';

const API_BASE_URL = 'https://api.rebardata.com/v1'; // Replace with actual Rebar Data API endpoint
const API_KEY = process.env.REACT_APP_REBAR_API_KEY || '';

const rebarDataClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
});

export const fetchMempoolStats = async () => {
  try {
    const response = await rebarDataClient.get('/mempool/stats');
    return response.data;
  } catch (error) {
    console.error('Error fetching mempool stats:', error);
    throw error;
  }
};

export const fetchFeeRates = async () => {
  try {
    const response = await rebarDataClient.get('/fees/recommended');
    return response.data;
  } catch (error) {
    console.error('Error fetching fee rates:', error);
    throw error;
  }
};

export const fetchTransactionVolume = async (timeFrame = '24h') => {
  try {
    const response = await rebarDataClient.get(`/transactions/volume?timeFrame=${timeFrame}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transaction volume:', error);
    throw error;
  }
};
