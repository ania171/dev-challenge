import './App.css';
import UsersList from './components/UsersList.jsx';
import Filters from './components/Filters.jsx';

function App() {
	return (
		<div className="container mx-auto my-4">
			<h1 className="mb-4 text-3xl font-bold">Users list</h1>
			<div className="lg:grid lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
				<div>
					<Filters />
				</div>
				<div className="lg:col-span-2 xl:col-span-3">
					<UsersList />
				</div>
			</div>
		</div>
	);
}

export default App;
