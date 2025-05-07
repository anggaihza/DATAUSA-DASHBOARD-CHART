import { useState, useEffect, useMemo } from 'react';
import { CensusService } from '../services/CensusService';

export const useCensus = () => {
  const [censusData, setCensusData] = useState([]);
  const [organizationInfo, setOrganizationInfo] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dateRange, setDateRange] = useState({ startYear: 0, endYear: 9999 });
  
  const censusService = useMemo(() => new CensusService(), []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { censusData, organizationInfo } = await censusService.getPopulationData();
        
        setCensusData(censusData);
        setOrganizationInfo(organizationInfo);
        
        if (censusData.length > 0) {
          const years = censusData.map(item => parseInt(item.year));
          const minYear = Math.min(...years);
          const maxYear = Math.max(...years);
          setDateRange({ startYear: minYear, endYear: maxYear });
        }
        
        setError(null);
      } catch (err) {
        setError('Failed to fetch census data. Please try again later.');
        console.error('Error in useCensus hook:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [censusService]);

  const filteredData = useMemo(() => {
    return censusService.filterByDateRange(
      censusData,
      dateRange.startYear,
      dateRange.endYear
    );
  }, [censusData, dateRange, censusService]);

  const updateDateRange = (startYear, endYear) => {
    setDateRange({ startYear, endYear });
  };

  return {
    censusData,       
    filteredData,      
    organizationInfo,   
    loading,
    error,
    dateRange,
    updateDateRange,
  };
};