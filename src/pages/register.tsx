// src/pages/register.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setUser, setToken } from '../store/slices/authSlice';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter(); // Import and use useRouter

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/auth/register', { email, password });
      dispatch(setUser(response.data.user));
      dispatch(setToken(response.data.token));
      router.push('/desktop'); // Redirect to the desktop page after registration
    } catch (error) {
      console.error('Register error:', error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl mb-4">Register</h1>
        <input
          type="email"
          className="w-full p-2 mb-2 border"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-2 mb-2 border"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full p-2 bg-blue-500 text-white" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
