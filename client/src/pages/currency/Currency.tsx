import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { convertToMillions } from '../../utils/convertToMillions';
import { convertToPercentage } from '../../utils/convertToPercentage';
import { convertToThousands } from '../../utils/convertToThousands';
import { convertToDate } from '../../utils/convertToDate';
import { Chart, Button, ModalWindow } from '../../components';
import { trpc } from '../../utils/trpc';
import { ModalWindowContext } from '../../context';
import { CurrencyContext } from '../../context/currencyContext/CurrencyContext';

import './Currency.scss';

export function Currency(){
  const { currencyId } = useParams();
  const { openModalWindow } = useContext(ModalWindowContext);
  const {addCurrencyId, addCurrencyName, addCurrencySymbol, addCurrencyPriceUsd} = useContext(CurrencyContext)

  const currencyInfo = trpc.currencyInfo.useQuery({id: currencyId})

  
  const currencyHistory = trpc.history.useQuery({
    id: currencyId,
    interval: 'd1'
  });

  const labelsChart = currencyHistory.data ? currencyHistory.data?.map((history: { time: number; }) => convertToDate(history.time)) : [];
  const dataChart = currencyHistory.data ? currencyHistory.data?.map((history: { priceUsd: string }) =>
    convertToPercentage(history.priceUsd)
  ) : [];

  const handleCurrency = () => {
    addCurrencyId(currencyInfo ? currencyInfo.data.id! : '');
    addCurrencyName(currencyInfo ? currencyInfo.data.name : '');
    addCurrencySymbol(currencyInfo ? currencyInfo.data.symbol : '');
    addCurrencyPriceUsd(currencyInfo ?currencyInfo.data.priceUsd : '');
    openModalWindow();
  };

  return (
    <div className='page-currency'>
      {currencyInfo.isLoading && <div>Loading...</div>}
      {!currencyInfo.isLoading && currencyInfo.data && (
        <>
          <div className='page-currency__info'>
            <div className='page-currency__info-circle'>
              <h4>Rank</h4>
              <h5>{currencyInfo.data.rank}</h5>
            </div>
            <div className='page-currency__info-circle'>
              <h4>{`${currencyInfo.data.name} (${currencyInfo.data.symbol})`}</h4>
              <h5>
                {convertToThousands(currencyInfo.data.priceUsd)} (
                {`${convertToPercentage(currencyInfo.data.changePercent24Hr)}%`})
              </h5>
            </div>
            <div className='page-currency__info-circle'>
              <h4>Market Cap</h4>
              <h5>{convertToMillions(currencyInfo.data.marketCapUsd)}</h5>
            </div>
            <div className='page-currency__info-circle'>
              <h4>Supply</h4>
              <h5>{`${convertToMillions(currencyInfo.data.supply)} ${
                currencyInfo.data.symbol
              }`}</h5>
            </div>
            <div className='page-currency__info-circle'>
              <h4>Volume (24Hr)</h4>
              <h5>{convertToMillions(currencyInfo.data.volumeUsd24Hr)}</h5>
            </div>
            <Button
              className='button_secondary'
              description='+'
              onClick={handleCurrency}
            />
            <ModalWindow />
          </div>
          <Chart
            labelsChart={labelsChart}
            dataChart={dataChart}
            name={currencyInfo.data.name}
          />
        </>
      )}
    </div>
  );
};
