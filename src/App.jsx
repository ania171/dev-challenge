import './App.css';
import UsersList from './components/UsersList.jsx';

function App() {
	return (
		<div className="container mx-auto my-4">
			<h1 className="text-3xl font-bold">Users list</h1>
			<UsersList />
		</div>
	);
}

export default App;
