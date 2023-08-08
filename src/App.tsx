import { FC, useEffect } from 'react';
import { useAppSelector } from './hooks/hooks';
import { Route, Routes } from 'react-router-dom';
import { Main, Currency } from './pages';
import { PATHS } from './constants/paths';
import { Layout } from './layout/Layout';

const App: FC = () => {
  const { main, currency, any } = PATHS;
  const isModalAddOpen = useAppSelector(({ modal }) => modal.value);

  useEffect(() => {
    const BODY = document.querySelector('body') as HTMLBodyElement;

    if (isModalAddOpen) {
      BODY.classList.add('body_overflow');
    } else {
      BODY.classList.remove('body_overflow');
    }
  }, [isModalAddOpen]);

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
