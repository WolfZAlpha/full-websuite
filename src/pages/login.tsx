// src/pages/login.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setUser, setToken } from '../store/slices/authSlice';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      dispatch(setUser(response.data.user));
      dispatch(setToken(response.data.token));
      router.push('/desktop'); // Redirect to the desktop page after login
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl mb-4">Login</h1>
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
        <button className="w-full p-2 bg-blue-500 text-white" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
