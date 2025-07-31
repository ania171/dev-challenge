import { useMemo } from 'react';
import User from './User.jsx';

function parseSortOption(option) {
  const [field, direction] = option.split('_');
  return { field, direction };
}

function UsersList({ users, sortOption, countryFilter, industryFilter }) {
  const filteredAndSortedUsers = useMemo(() => {
    let result = users.filter((user) => {
      const matchesCountry = countryFilter === 'All' || user.country === countryFilter;
      const matchesIndustry = industryFilter === 'All' || user.industry === industryFilter;
      return matchesCountry && matchesIndustry;
    });

    const { field, direction } = parseSortOption(sortOption);
    return result.sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];

      const comparison =
        typeof aValue === 'string' ? (aValue > bValue ? 1 : aValue < bValue ? -1 : 0) : aValue - bValue;

      return direction === 'ascending' ? comparison : -comparison;
    });
  }, [users, sortOption, countryFilter, industryFilter]);

  return (
    <>
      {filteredAndSortedUsers?.length > 0 ? (
        <ul className="list-none">
          {filteredAndSortedUsers.map((user) => (
            <li key={user.id} className="mb-4 border border-gray-200 bg-white p-4">
              <User user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="bg-gray-100 px-4 py-15 text-center text-gray-500">
          <h3 className="mb-2 text-xl font-bold text-gray-700">No results found</h3>
        </div>
      )}
    </>
  );
}

export default UsersList;
