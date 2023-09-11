import { useState } from 'react';

import { TableHead, TableRow, Button, ModalWindow } from '../../components';
import { trpc } from '../../utils/trpc';

import './Main.scss';

export function Main() {
  const limit = 10;
  const [offset, setOffset] = useState<number>(0);
  
  const currencyQuery = trpc.assets.useQuery({ids: '', limit, offset})

  const increaseOffset = () => {
    setOffset(offset + 10);
  };
  const decreaseOffset = () => {
      setOffset(offset - 10);
  };

  return (
    <div className='page-main'>
      <table className='page-main__table'>
        <TableHead />
        <tbody>
          {currencyQuery.isLoading && (
            <tr className='page-main__table-tr'>
              <th className='page-main__table-tr-th' colSpan={8}>Loading...</th>
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
      <div className='page-main__buttons'>
        <Button
          className='button_primary'
          description='<<'
          onClick={decreaseOffset}
          disabled={!offset}
        />
        <Button
          className='button_primary'
          description='>>'
          onClick={increaseOffset}
        />
      </div>
      <ModalWindow />
    </div>
  );
};

