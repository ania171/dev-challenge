import './App.css';
import { useEffect, useState } from 'react';
import SortingFilters from './components/SortingFilters.jsx';
import UsersList from './components/UsersList.jsx';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('name_ascending');
  const [countryFilter, setCountryFilter] = useState('All');
  const [industryFilter, setIndustryFilter] = useState('All');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch('https://dujour.squiz.cloud/developer-challenge/data', {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto my-4 px-4 text-base lg:text-sm">
        <div className="flex items-center justify-center bg-gray-100 px-4 py-15 text-center text-gray-400">
          <span className="text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-e-transparent"></span>
          <h3 className="ml-4 inline-block text-xl font-bold text-gray-700">Loading...</h3>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto my-4 px-4 text-base lg:text-sm">
        <div className="bg-gray-100 px-4 py-15 text-center text-gray-500">
          <h3 className="mb-2 text-xl font-bold text-red-700">Error: {error.message}</h3>
        </div>
      </div>
    );
  }

  const uniqueCountries = ['All', ...new Set(users.map((user) => user.country))];
  const uniqueIndustries = [
    'All',
    ...new Set(users.map((user) => user.industry).filter((industry) => industry !== 'n/a')),
  ];

  return (
    <div className="container mx-auto my-4 px-4 text-sm">
      <div className="mb-5 flex items-center justify-between border-b-1 border-gray-200 pb-3">
        <h1 className="text-2xl font-bold text-gray-800">Users list</h1>
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
        <div className="mb-4 h-fit bg-gray-100 p-5">
          <SortingFilters
            sortOption={sortOption}
            setSortOption={setSortOption}
            countryFilter={countryFilter}
            setCountryFilter={setCountryFilter}
            industryFilter={industryFilter}
            setIndustryFilter={setIndustryFilter}
            uniqueCountries={uniqueCountries}
            uniqueIndustries={uniqueIndustries}
          />
        </div>

        <div className="lg:col-span-2 xl:col-span-3">
          <UsersList
            users={users}
            sortOption={sortOption}
            countryFilter={countryFilter}
            industryFilter={industryFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
