import { useState, useEffect } from 'react';
import User from './User.jsx';
import { cn } from '../utils/cn';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Ładowanie...</p>;
  if (error) return <p>Błąd: {error.message}</p>;

  return (
    <ul>
      {users.map((user, index) => (
        <li className={cn('py-4', index !== users.length - 1 && 'border-b-1')}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
