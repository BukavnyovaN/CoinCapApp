import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';
import React from 'react';

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <main className='wrapper'>
        <Outlet />
      </main>
    </div>
  );
};

export { Layout };
