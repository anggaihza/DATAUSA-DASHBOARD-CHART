import { Census } from '../../domain/models/Census';
import { censusApi } from '../../infrastructure/api/censusApi';

export class CensusService {

  async getPopulationData() {
    try {
      const apiData = await censusApi.getPopulationData();
      
      const censusData = Census.fromApiResponse(apiData);
      
      censusData.sort((a, b) => a.yearDate - b.yearDate);
      
      const organizationInfo = Census.getOrganizationInfo(apiData);
      
      return {
        censusData,
        organizationInfo
      };
    } catch (error) {
      console.error('Error in CensusService:', error);
      throw error;
    }
  }


  filterByDateRange(data, startYear, endYear) {
    if (!data || !Array.isArray(data)) {
      return [];
    }
    
    return data.filter(item => {
      const year = parseInt(item.year);
      return year >= startYear && year <= endYear;
    });
  }
}