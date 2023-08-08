import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IAssets } from '../../../API/coincap';
import {
  addCurrencyId,
  addCurrencyName,
  addCurrencySymbol,
  addCurrencyPriceUsd,
} from '../../../store/currencyInfoSlice';
import { SecondaryButton } from '../../buttons';
import { useAppDispatch } from '../../../hooks/hooks';
import { open } from '../../../store/modalWindowSlice';
import './TableRow.scss';

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
    dispatch(addCurrencyId(id!));
    dispatch(addCurrencyName(name));
    dispatch(addCurrencySymbol(symbol));
    dispatch(addCurrencyPriceUsd(priceUsd));
    dispatch(open());
  };
  return (
    <tr>
      <td colSpan={1}>{rank}</td>
      <td colSpan={2} className='table-currency__wrapper'>
        <Link to={`/${id}`} className='table-currency__name-wrapper'>
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
        <SecondaryButton description='Add' onClick={handleCurrency} />
      </td>
      <td colSpan={1}>{`${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(+priceUsd)}`}</td>
      <td colSpan={1}>{`${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 2,
      }).format(+marketCapUsd)}`}</td>
      <td colSpan={1}>{`${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(+vwap24Hr)}`}</td>
      <td colSpan={1}>{`${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 2,
      }).format(+supply)}`}</td>
      <td colSpan={1}>{`${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 2,
      }).format(+volumeUsd24Hr)}`}</td>
      <td colSpan={1}>{`${Number(changePercent24Hr).toFixed(2)}%`}</td>
    </tr>
  );
};

export { TableRow };
