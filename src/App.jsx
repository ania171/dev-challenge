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

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const uniqueCountries = ['All', ...new Set(users.map((user) => user.country))];
	const uniqueIndustries = [
		'All',
		...new Set(users.map((user) => user.industry).filter((industry) => industry !== 'n/a')),
	];

	return (
		<div className="container mx-auto my-4 px-4 text-base lg:text-sm">
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
