
export class Census {
    constructor(data) {
      this.id = data.ID || '';
      this.nation = data["Nation"] || '';
      this.year = data.Year || '';
      this.population = data.Population || 0;
      this.yearDate = new Date(data.Year, 0, 1);
      this.source = data["Source"] || '';
    }
  

    static fromApiResponse(apiData) {
      if (!apiData || !apiData.data || !Array.isArray(apiData.data)) {
        return [];
      }
  
      return apiData.data.map(item => new Census(item));
    }
  

    static getOrganizationInfo(apiData) {
      if (!apiData || !apiData.source) {
        return { name: 'Unknown', description: 'No description available' };
      }
  
      return {
        name: apiData.source[0].annotations.source_name || 'Unknown',
        description: apiData.source[0].annotations.source_description || 'No description available'
      };
    }
  }