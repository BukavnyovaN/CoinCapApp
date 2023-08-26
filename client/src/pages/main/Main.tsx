import { FC, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { TableHead, TableRow, Button, ModalWindow } from '../../components';
import { trpc } from '../../utils/trpc';

import './Main.scss';

const Main: FC = () => {
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  
  const currencyQuery = trpc.assets.useQuery({ids: '', limit, offset})

  const isModalAddOpen = useAppSelector(({ modal }) => modal.value);
  const dispatch = useAppDispatch();

  const increaseOffset = () => {
    setOffset(offset + 10);
  };
  const decreaseOffset = () => {
    if (offset >= 10) {
      setOffset(offset - 10);
    }
  };

  return (
    <div className='main-wrapper'>
      <table className='table'>
        <TableHead />
        <tbody>
          {currencyQuery.isLoading && (
            <tr>
              <th colSpan={8}>Loading...</th>
            </tr>
          )}
          {!currencyQuery.isLoading &&
            currencyQuery.data &&
            currencyQuery.data.map(
              (currency: any) => {
                return (
                  <TableRow
                    key={currency.id}
                    id={currency.id}
                    rank={currency.rank}
                    name={currency.name}
                    symbol={currency.symbol}
                    priceUsd={currency.priceUsd}
                    marketCapUsd={currency.marketCapUsd}
                    vwap24Hr={currency.vwap24Hr}
                    supply={currency.supply}
                    volumeUsd24Hr={currency.volumeUsd24Hr}
                    changePercent24Hr={currency.changePercent24Hr}
                  />
                );
              }
            )}
        </tbody>
      </table>
      <div className='button-wrapper'>
        <Button
          className='button-primary'
          description='<<'
          onClick={decreaseOffset}
        />
        <Button
          className='button-primary'
          description='>>'
          onClick={increaseOffset}
        />
      </div>
      <ModalWindow />
    </div>
  );
};

export { Main };
