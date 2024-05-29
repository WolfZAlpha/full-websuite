import '../styles/globals.css';
import '../styles/PreLoader.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PreLoader from '../components/PreLoader';
import { useRouter } from 'next/router';

// Set base URL for axios
axios.defaults.baseURL = 'http://localhost:3000';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      {loading ? (
        <PreLoader onComplete={() => setLoading(false)} />
      ) : (
        <Component {...pageProps} />
      )}
    </Provider>
  );
};

export default MyApp;
