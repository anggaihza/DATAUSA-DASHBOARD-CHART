import axios from 'axios';

const BASE_URL = 'https://datausa.io/api';

export const censusApi = {

  getPopulationData: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/data`, {
        params: {
          drilldowns: 'Nation',
          measures: 'Population'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching population data:', error);
      throw error;
    }
  }
};