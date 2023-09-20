import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';

import { trpc } from './utils/trpc';
import { Main, Currency, NotFound } from './pages';
import { PATHS } from './constants/paths';
import { Layout } from './layout/Layout';
import { configs } from "./configs";
import { AllProviders } from './context/AppContextProvider';
import { CartProvider } from './context/cartContext/CartContext';


function App() {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
        keepPreviousData: true,
      },
    },
  }));
  const [trpcClient] = useState(() => trpc.createClient({
    links: [
      httpBatchLink({
        url: configs.http.serverUrl
      })
    ]
  }))

  const { MAIN, ANY, CURRENCY, NOT_FOUND } = PATHS;
  
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <CartProvider>
          <AllProviders> 
            <Routes>
              <Route path={MAIN} element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path={CURRENCY} element={<Currency/>}/>
                <Route path={NOT_FOUND} element={<NotFound/>}/>
                <Route path={ANY} element={<NotFound/>}/>
              </Route>
            </Routes>
          </AllProviders>
          </CartProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </trpc.Provider>

  );
}

export { App };
