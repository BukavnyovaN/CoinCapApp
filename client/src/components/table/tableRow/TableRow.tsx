import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IAssets } from '../../../API/coincap';
import {
  addCurrencyId,
  addCurrencyName,
  addCurrencySymbol,
  addCurrencyPriceUsd,
} from '../../../store/currencyInfoSlice';
import { Button } from '../../button/Button';
import { convertToMillions } from '../../../utils/convertToMillions';
import { convertToPercentage } from '../../../utils/convertToPercentage';
import { convertToThousands } from '../../../utils/convertToThousands';
import { useAppDispatch } from '../../../hooks/hooks';
import { open } from '../../../store/modalWindowSlice';

import './TableRow.scss';
import React from 'react';

const TableRow: FC<IAssets> = ({
  id,
  rank,
  name,
  symbol,
  priceUsd,
  marketCapUsd,
  vwap24Hr,
  supply,
  volumeUsd24Hr,
  changePercent24Hr,
}) => {
  const dispatch = useAppDispatch();

  const handleCurrency = () => {
    dispatch(addCurrencyId(id ? id : ''));
    dispatch(addCurrencyName(name));
    dispatch(addCurrencySymbol(symbol));
    dispatch(addCurrencyPriceUsd(priceUsd));
    dispatch(open());
  };
  return (
    <tr>
      <td colSpan={1}>{rank}</td>
      <td colSpan={2} className='table-currency__wrapper'>
        <Link
          to={`/CoinCapApp/currency/${id}`}
          className='table-currency__name-wrapper'
        >
          <img
            src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
            alt={symbol}
            className='table-currency__icon'
          />
          <div className='table-currency__name'>
            <div>{`${name}`}</div>
            <div>{`${symbol}`}</div>
          </div>
        </Link>
        <Button
          className='button-secondary'
          description='Add'
          onClick={handleCurrency}
        />
      </td>
      {Number(priceUsd) > 0.01 ? (
        <td colSpan={1}> {convertToThousands(priceUsd)} </td>
      ) : (
        <td colSpan={1}> ${Number(priceUsd).toFixed(5)} </td>
      )}
      <td colSpan={1}>{convertToMillions(marketCapUsd)}</td>
      <td colSpan={1}>{convertToThousands(vwap24Hr)}</td>
      <td colSpan={1}>{convertToMillions(supply)}</td>
      <td colSpan={1}>{convertToMillions(volumeUsd24Hr)}</td>
      <td colSpan={1}>{`${convertToPercentage(changePercent24Hr)}%`}</td>
    </tr>
  );
};

export { TableRow };
