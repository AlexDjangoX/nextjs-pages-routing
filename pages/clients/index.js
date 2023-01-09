import React from 'react';
import Link from 'next/link';

const ClientsPage = () => {
  const clients = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Max' },
  ];
  return (
    <div>
      <h1>Clients Page, index.js in clients folder</h1>

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link
              href={{ pathname: '/clients/[id]', query: { id: client.id } }}
            ></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
