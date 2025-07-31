// tests/User.test.jsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import User from './User.jsx';

describe('User Component', () => {
  it('renders user information correctly', () => {
    const mockUser = {
      id: 1,
      name: 'John Doe',
      country: 'United States',
      industry: 'Technology',
      numberOfEmployees: 500,
    };

    render(<User user={mockUser} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('United States')).toBeInTheDocument();
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
  });

  it('renders user without industry when industry is n/a', () => {
    const mockUser = {
      id: 2,
      name: 'Jane Smith',
      country: 'Canada',
      industry: 'n/a',
      numberOfEmployees: 250,
    };

    render(<User user={mockUser} />);

    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Canada')).toBeInTheDocument();
    expect(screen.queryByText('n/a')).not.toBeInTheDocument();
    expect(screen.getByText('250')).toBeInTheDocument();
  });
});
