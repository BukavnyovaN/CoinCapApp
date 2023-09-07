import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';

export function Layout(){
  return (
    <div>
      <Header />
      <main className='wrapper'>
        <Outlet />
      </main>
    </div>
  );
};
