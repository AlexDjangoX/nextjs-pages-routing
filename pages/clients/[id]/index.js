import React from 'react';

import Link from 'next/link';

const ClientProjectPage = () => {
  return (
    <>
      <div>Client Project Page of given Client, index.js in folder [id]</div>

      <ul>
        <li>
          <Link href='/clients/alex/project_1'>Alex projects</Link>
        </li>
      </ul>
    </>
  );
};

export default ClientProjectPage;

// http://localhost:3000/clients/alex
