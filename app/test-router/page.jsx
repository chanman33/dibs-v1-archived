"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const TestRouterPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('Router:', router);

    if (!router) return;

    console.log('Router is ready');
  }, [router]);

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>Test Router Page</h1>
      <button onClick={handleClick}>Go to Step Two</button>
    </div>
  );
};

export default TestRouterPage;
