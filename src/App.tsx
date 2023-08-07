import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, Currency } from './pages';
import { PATHS } from './constants/paths';
import { Layout } from './layout/Layout';

const App: FC = () => {
  const { main, currency, any } = PATHS;
  return (
    <Routes>
      <Route path={main} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={currency} element={<Currency />} />
        <Route path={any} element={<Main />} />
      </Route>
    </Routes>
  );
};

export { App };
