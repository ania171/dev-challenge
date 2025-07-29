function User({ user }) {
	return (
		<>
			<p>Name: {user.name}</p>
			<p>Country: {user.country}</p>
			{user.industry && user.industry !== 'n/a' && <p>Industry: {user.industry}</p>}
			<p>Number of employees: {user.numberOfEmployees}</p>
		</>
	);
}

export default User;
