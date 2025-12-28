'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  role: 'student' | 'staff' | 'admin';
  accountCreatedDate: string;
  department?: string;
  phoneNumber?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy user database (replace with MongoDB later)
const DUMMY_USERS = [
  {
    id: '1',
    email: 'student@campus.com',
    password: 'student123',
    name: 'John Doe',
    username: 'johndoe',
    role: 'student' as const,
    accountCreatedDate: '2024-01-15',
    department: 'Computer Science',
    phoneNumber: '+1-234-567-8901',
  },
  {
    id: '2',
    email: 'staff@campus.com',
    password: 'staff123',
    name: 'Jane Smith',
    username: 'janesmith',
    role: 'staff' as const,
    accountCreatedDate: '2023-08-20',
    department: 'Administration',
    phoneNumber: '+1-234-567-8902',
  },
  {
    id: '3',
    email: 'admin@campus.com',
    password: 'admin123',
    name: 'Admin User',
    username: 'admin',
    role: 'admin' as const,
    accountCreatedDate: '2023-01-01',
    department: 'IT Department',
    phoneNumber: '+1-234-567-8900',
  },
  {
    id: '4',
    email: 'alice@campus.com',
    password: 'alice123',
    name: 'Alice Johnson',
    username: 'alicejohnson',
    role: 'student' as const,
    accountCreatedDate: '2024-03-10',
    department: 'Mathematics',
    phoneNumber: '+1-234-567-8903',
  },
  {
    id: '5',
    email: 'bob@campus.com',
    password: 'bob123',
    name: 'Bob Williams',
    username: 'bobwilliams',
    role: 'staff' as const,
    accountCreatedDate: '2023-11-05',
    department: 'Library',
    phoneNumber: '+1-234-567-8904',
  },
];

const generateToken = (userId: string): string => {
  return btoa(JSON.stringify({ userId, timestamp: Date.now() }));
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing token on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Find user in dummy database
    const foundUser = DUMMY_USERS.find(
      u => u.email === email && u.password === password
    );

    if (!foundUser) {
      throw new Error('Invalid email or password');
    }

    // Generate token
    const newToken = generateToken(foundUser.id);

    // Create user object (without password)
    const userWithoutPassword: User = {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
      username: foundUser.username,
      role: foundUser.role,
      accountCreatedDate: foundUser.accountCreatedDate,
      department: foundUser.department,
      phoneNumber: foundUser.phoneNumber,
    };

    // Store in localStorage
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));

    // Update state
    setToken(newToken);
    setUser(userWithoutPassword);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    login,
    logout,
    isAuthenticated: !!token && !!user,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}