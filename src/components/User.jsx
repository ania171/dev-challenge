function User({ user }) {
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3 xl:grid-cols-4">
      <dt className="font-semibold text-gray-700">Name:</dt>
      <dd className="font-bold text-gray-900 md:col-span-2 xl:col-span-3">{user.name}</dd>

      <dt className="font-semibold text-gray-700">Country:</dt>
      <dd className="text-gray-900 md:col-span-2 xl:col-span-3">{user.country}</dd>

      {user.industry && user.industry !== 'n/a' && (
        <>
          <dt className="font-semibold text-gray-700">Industry:</dt>
          <dd className="text-gray-900 md:col-span-2 xl:col-span-3">{user.industry}</dd>
        </>
      )}

      <dt className="font-semibold text-gray-700">Number of employees:</dt>
      <dd className="text-gray-900 md:col-span-2 xl:col-span-3">{user.numberOfEmployees}</dd>
    </dl>
  );
}

export default User;
