
const CensusInfo = ({ organizationInfo }) => {
    const { name, description } = organizationInfo;
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <div className="border-t border-gray-200 pt-4 mt-2">
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default CensusInfo;