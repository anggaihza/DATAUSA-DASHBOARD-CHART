import Dashboard from '../components/Dashboard';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl sm:text-3xl font-bold">U.S. Population Dashboard</h1>
        </div>
      </header>
      
      <main>
        <Dashboard />
      </main>
      
      <footer className="bg-gray-800 text-white mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-300 text-sm">
            Asep Angga Ihza S
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;