import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { open } from '../../store/modalWindowSlice';
import {
  addCurrencyId,
  addCurrencyName,
  addCurrencySymbol,
} from '../../store/currencyInfoSlice';
import { useGetAssetQuery, useGetAssetHistoryQuery } from '../../API/coincap';
import { Chart, SecondaryButton, ModalWindow } from '../../components';
import './Currency.scss';

const Currency: FC = () => {
  const dispatch = useAppDispatch();
  const { currencyId } = useParams();
  const { data: asset, isLoading } = useGetAssetQuery({ id: currencyId });

  const { data: assetHistory } = useGetAssetHistoryQuery({ id: currencyId });

  const labelsChart = assetHistory?.data.map(({ time }) =>
    new Date(time).toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
  );

  const dataChart = assetHistory?.data.map(({ priceUsd }) =>
    Number(priceUsd).toFixed(2)
  );

  const handleCurrency = () => {
    dispatch(addCurrencyId(asset!.data.id!));
    dispatch(addCurrencyName(asset!.data.name));
    dispatch(addCurrencySymbol(asset!.data.symbol));
    dispatch(open());
  };

  return (
    <div className='currency-wrapper'>
      {isLoading && <div>Loading...</div>}
      {!isLoading && asset && (
        <>
          <div className='currency-details_wrapper'>
            <div className='circle'>
              <h3>Rank</h3>
              <h3>{asset.data.rank}</h3>
            </div>
            <div className='circle'>
              <h3>Market Cap</h3>
              <h3>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  notation: 'compact',
                  compactDisplay: 'short',
                  maximumFractionDigits: 2,
                }).format(+asset.data.marketCapUsd)}
              </h3>
            </div>
            <div className='circle'>
              <h3>Supply</h3>
              <h3>
                {`${new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  notation: 'compact',
                  compactDisplay: 'short',
                  maximumFractionDigits: 2,
                }).format(+asset.data.supply)} ${asset.data.symbol}`}
              </h3>
            </div>
            <div className='circle'>
              <h3>Volume (24Hr)</h3>
              <h3>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  notation: 'compact',
                  compactDisplay: 'short',
                  maximumFractionDigits: 2,
                }).format(+asset.data.volumeUsd24Hr)}
              </h3>
            </div>
            <SecondaryButton description='+' onClick={handleCurrency} />
            <ModalWindow />
          </div>
          <Chart
            labelsChart={labelsChart}
            dataChart={dataChart}
            name={asset.data.name}
          />
        </>
      )}
    </div>
  );
};

export { Currency };
