import React from 'react';
import { useRouter } from 'next/router';

const PortfolioProject = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return <div>PortfolioProject</div>;
};

export default PortfolioProject;
