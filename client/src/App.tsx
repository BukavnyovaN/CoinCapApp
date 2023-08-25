import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, Currency, NotFound } from './pages';
import { PATHS } from './constants/paths';
import { Layout } from './layout/Layout';
import { useOverflow } from './hooks/useOverflow';
import React from 'react';
import { TrpcRouter } from '../../common/trpc-router.type'

import { createTRPCReact } from '@trpc/react-query';

const BACKEND_URL = "http://localhost:8080/cat";
export const trpc = createTRPCReact<TrpcRouter>();


const App: FC = () => {
  const { MAIN, ANY, CURRENCY, NOT_FOUND } = PATHS;
  useOverflow();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={CURRENCY} element={<Currency />} />
          <Route path={NOT_FOUND} element={<NotFound />} />
          <Route path={ANY} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { App };
