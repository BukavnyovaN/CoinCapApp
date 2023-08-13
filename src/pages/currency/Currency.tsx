import React, { FC } from 'react';
import { PATHS } from '../../constants/paths';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { open } from '../../store/modalWindowSlice';
import {
  addCurrencyId,
  addCurrencyName,
  addCurrencySymbol,
  addCurrencyPriceUsd,
} from '../../store/currencyInfoSlice';
import { convertToMillions } from '../../utils/convertToMillions';
import { convertToPercentage } from '../../utils/convertToPercentage';
import { convertToThousands } from '../../utils/convertToThousands';
import { convertToDate } from '../../utils/convertToDate';
import { useGetAssetQuery, useGetAssetHistoryQuery } from '../../API/coincap';
import { Chart, Button, ModalWindow } from '../../components';
import './Currency.scss';

const Currency: FC = () => {
  const { NOT_FOUND } = PATHS;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currencyId } = useParams();
  const {
    data: asset,
    isLoading,
    error,
  } = useGetAssetQuery({ id: currencyId });

  if (error) {
    navigate(NOT_FOUND);
  }

  const { data: assetHistory } = useGetAssetHistoryQuery({ id: currencyId });

  const labelsChart = assetHistory?.data.map(({ time }) => convertToDate(time));
  const dataChart = assetHistory?.data.map(({ priceUsd }) =>
    convertToPercentage(priceUsd)
  );

  const handleCurrency = () => {
    dispatch(addCurrencyId(asset ? asset.data.id! : ''));
    dispatch(addCurrencyName(asset ? asset.data.name : ''));
    dispatch(addCurrencySymbol(asset ? asset.data.symbol : ''));
    dispatch(addCurrencyPriceUsd(asset ? asset.data.priceUsd : ''));
    dispatch(open());
  };

  return (
    <div className='currency-wrapper'>
      {isLoading && <div>Loading...</div>}
      {!isLoading && asset && (
        <>
          <div className='currency-details_wrapper'>
            <div className='circle'>
              <h4>Rank</h4>
              <h5>{asset.data.rank}</h5>
            </div>
            <div className='circle'>
              <h4>{`${asset.data.name} (${asset.data.symbol})`}</h4>
              <h5>
                {convertToThousands(asset.data.priceUsd)} (
                {`${convertToPercentage(asset.data.changePercent24Hr)}%`})
              </h5>
            </div>
            <div className='circle'>
              <h4>Market Cap</h4>
              <h5>{convertToMillions(asset.data.marketCapUsd)}</h5>
            </div>
            <div className='circle'>
              <h4>Supply</h4>
              <h5>{`${convertToMillions(asset.data.supply)} ${
                asset.data.symbol
              }`}</h5>
            </div>
            <div className='circle'>
              <h4>Volume (24Hr)</h4>
              <h5>{convertToMillions(asset.data.volumeUsd24Hr)}</h5>
            </div>
            <Button
              className='button-secondary'
              description='+'
              onClick={handleCurrency}
            />
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
