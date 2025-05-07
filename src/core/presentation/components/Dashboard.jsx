import { useMemo } from 'react';
import CensusInfo from './CensusInfo';
import LineChart from './LineChart';
import PieChart from './PieChart';
import DateRangeFilter from './DateRangeFilter';
import { useCensus } from '../../application/hooks/useCensus';


const Dashboard = () => {
  const {
    filteredData,
    organizationInfo,
    loading,
    error,
    dateRange,
    updateDateRange,
    censusData
  } = useCensus();

  const availableYears = useMemo(() => {
    return censusData.map(item => parseInt(item.year));
  }, [censusData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-blue-600 border-b-blue-600 border-l-gray-200 border-r-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading census data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <CensusInfo organizationInfo={organizationInfo} />
      
      <DateRangeFilter 
        dateRange={dateRange}
        onDateRangeChange={updateDateRange}
        availableYears={availableYears}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart data={filteredData} />
        <PieChart data={filteredData} />
      </div>
    </div>
  );
};

export default Dashboard;