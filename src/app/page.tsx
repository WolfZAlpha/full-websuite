import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/'); // Redirect to the home page which loads PreLoader and then Login
  }, [router]);

  return null; // This page itself does nothing
}
