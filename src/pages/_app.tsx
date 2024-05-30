import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/LoginPage.module.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PreLoader from '../components/PreLoader';
import { useRouter } from 'next/router';

// Set base URL for axios
axios.defaults.baseURL = 'http://localhost:3000';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulating the loading complete after component mounts
    setLoading(false);
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
