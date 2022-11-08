import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image:
        'https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      places: 3,
    },
    {
      id: 'u2',
      name: 'Ajay Nw',
      image:
        'https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      places: 1,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
