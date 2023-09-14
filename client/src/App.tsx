import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import React, { useState } from 'react';

import { refreshCartList, trpc } from './utils/trpc';
import { Main, Currency, NotFound } from './pages';
import { PATHS } from './constants/paths';
import { Layout } from './layout/Layout';
import { useOverflow } from './hooks/useOverflow';
import { configs } from "./configs";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      keepPreviousData: true,
    },
  },
});

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: configs.http.serverUrl
    })
  ]
})

queryClient.setQueryData([`cartList`], [])

function App() {
  const { MAIN, ANY, CURRENCY, NOT_FOUND } = PATHS;
  useOverflow();
  refreshCartList();

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={MAIN} element={<Layout/>}>
              <Route index element={<Main/>}/>
              <Route path={CURRENCY} element={<Currency/>}/>
              <Route path={NOT_FOUND} element={<NotFound/>}/>
              <Route path={ANY} element={<NotFound/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </trpc.Provider>

  );
}

export { App };
