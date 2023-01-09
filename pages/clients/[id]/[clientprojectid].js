import React from 'react';
import { useRouter } from 'next/router';

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  // Object { id: "alex", clientprojectid: "9" }

  return (
    <div>
      SelectedClientProjectPage for a Specific Project For A Selected Client
    </div>
  );
};

export default SelectedClientProjectPage;

// http://localhost:3000/clients/alex/9
