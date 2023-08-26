import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import React, {useState} from 'react';
import { trpc } from './utils/trpc';

import { Main, Currency, NotFound } from './pages';
import { PATHS } from './constants/paths';
import { Layout } from './layout/Layout';
import { useOverflow } from './hooks/useOverflow';


function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => trpc.createClient({
    links: [
      httpBatchLink({
        // url: 'https://coin-cap-server.onrender.com/trpc',
        url: 'http://127.0.0.1:4000/trpc',
      })
    ]
  }))

  const { MAIN, ANY, CURRENCY, NOT_FOUND } = PATHS;
  useOverflow();

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </trpc.Provider>

  );
};

export { App };