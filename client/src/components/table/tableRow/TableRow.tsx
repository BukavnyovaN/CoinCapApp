import { Link } from 'react-router-dom';

import { IAssets } from '../../../store/cartSlice';
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

export function TableRow ({
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
} : IAssets) {
  const dispatch = useAppDispatch();

  const handleCurrency = () => {
    dispatch(addCurrencyId(id ? id : ''));
    dispatch(addCurrencyName(name));
    dispatch(addCurrencySymbol(symbol));
    dispatch(addCurrencyPriceUsd(priceUsd));
    dispatch(open());
  };
  return (
    <tr className='table-row'>
      <td className='table-row__td' colSpan={1}>{rank}</td>
      <td colSpan={2} className='table-row__td table-currency'>
        <Link
          to={`/CoinCapApp/currency/${id}`}
          className='table-row__currencies'
        >
          <img
            src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
            alt={symbol}
            className='table-row__currencies-icon'
          />
          <div className='table-row__currencies-name'>
            <div>{`${name}`}</div>
            <div>{`${symbol}`}</div>
          </div>
        </Link>
        <Button
          className='button_secondary'
          description='Add'
          onClick={handleCurrency}
        />
      </td>
      {Number(priceUsd) > 0.01 ? (
        <td className='table-row__td' colSpan={1}> {convertToThousands(priceUsd)} </td>
      ) : (
        <td className='table-row__td' colSpan={1}> ${Number(priceUsd).toFixed(5)} </td>
      )}
      <td className='table-row__td' colSpan={1}>{convertToMillions(marketCapUsd)}</td>
      <td className='table-row__td' colSpan={1}>{convertToThousands(vwap24Hr)}</td>
      <td className='table-row__td' colSpan={1}>{convertToMillions(supply)}</td>
      <td className='table-row__td' colSpan={1}>{convertToMillions(volumeUsd24Hr)}</td>
      <td className='table-row__td' colSpan={1}>{`${convertToPercentage(changePercent24Hr)}%`}</td>
    </tr>
  );
};
