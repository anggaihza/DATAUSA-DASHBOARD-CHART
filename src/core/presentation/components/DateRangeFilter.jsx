import { useState, useEffect } from 'react';

const DateRangeFilter = ({ dateRange, onDateRangeChange, availableYears = [] }) => {
  const [startYear, setStartYear] = useState(dateRange.startYear);
  const [endYear, setEndYear] = useState(dateRange.endYear);

  useEffect(() => {
    setStartYear(dateRange.startYear);
    setEndYear(dateRange.endYear);
  }, [dateRange.startYear, dateRange.endYear]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateRangeChange(parseInt(startYear), parseInt(endYear));
  };

  const minYear = availableYears.length > 0 ? Math.min(...availableYears) : 2000;
  const maxYear = availableYears.length > 0 ? Math.max(...availableYears) : 2023;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Filter by Year Range</h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="w-full sm:w-1/3">
            <label htmlFor="startYear" className="block text-sm font-medium text-gray-700 mb-1">
              Start Year
            </label>
            <input
              type="number"
              id="startYear"
              name="startYear"
              min={minYear}
              max={endYear}
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="w-full sm:w-1/3">
            <label htmlFor="endYear" className="block text-sm font-medium text-gray-700 mb-1">
              End Year
            </label>
            <input
              type="number"
              id="endYear"
              name="endYear"
              min={startYear}
              max={maxYear}
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="w-full sm:w-1/3 sm:self-end">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DateRangeFilter;