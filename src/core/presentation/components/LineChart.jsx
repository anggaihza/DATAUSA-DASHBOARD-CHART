import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const LineChart = ({ data }) => {
  const chartData = data.map(item => ({
    year: item.year,
    population: item.population
  }));

  const formatPopulation = (value) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const maxPopulation = Math.max(...data.map(item => item.population));
  const yAxisDomain = [0, Math.ceil(maxPopulation * 1.1)]; 

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Population Trend Over Time</h3>
      <div className="w-full h-64 sm:h-80 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 50,
              bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="year" 
              label={{ 
                value: 'Year', 
                position: 'insideBottomRight', 
                offset: -10 
              }}
            />
            <YAxis 
              domain={yAxisDomain}
              tickFormatter={formatPopulation}
              label={{ 
                value: 'Population', 
                angle: -90, 
                position: 'insideLeft',
                offset: -35
              }}
              width={80}
            />
            <Tooltip formatter={(value) => [formatPopulation(value), 'Population']} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="population" 
              stroke="#3b82f6" 
              strokeWidth={2}
              activeDot={{ r: 8 }} 
              name="Population"
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;