import { useEffect, useState } from 'react';
import PreLoader from '../components/PreLoader'; // Ensure consistent casing
import LoginPage from '../components/LoginPage';
import Desktop from '../components/desktop/Desktop'; // Updated import path

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <PreLoader onComplete={() => setLoading(false)} />; // Pass required prop
  }

  if (!authenticated) {
    return <LoginPage onLogin={() => setAuthenticated(true)} />;
  }

  return <Desktop />;
};

export default Home;
