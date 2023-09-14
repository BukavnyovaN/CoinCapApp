import { useParams } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/hooks';
import { open } from '../../store/modalWindowSlice';
import { convertToMillions } from '../../utils/convertToMillions';
import { convertToPercentage } from '../../utils/convertToPercentage';
import { convertToThousands } from '../../utils/convertToThousands';
import { convertToDate } from '../../utils/convertToDate';
import { Chart, Button, ModalWindow } from '../../components';
import { trpc } from '../../utils/trpc';

import './Currency.scss';
import { queryClient } from '../../App';

export function Currency(){
  const dispatch = useAppDispatch();
  const { currencyId } = useParams();

  const {data, isLoading, isError, error} = trpc.currencyInfo.useQuery({id: currencyId})
  
  const currencyHistory = trpc.history.useQuery({
    id: currencyId,
    interval: 'd1'
  });

  const labelsChart = currencyHistory.data ? currencyHistory.data?.map((history: { time: number; }) => convertToDate(history.time)) : [];
  const dataChart = currencyHistory.data ? currencyHistory.data?.map((history: { priceUsd: string }) =>
    convertToPercentage(history.priceUsd)
  ) : [];

  const handleCurrency = () => {
    queryClient.setQueryData(['currentCurrency'], data ? {...data} : '')

    dispatch(open());
  };

  return (
    <div className='page-currency'>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Some error has occured: {error.message}</div>}
      {!isLoading && data && (
        <>
          <div className='page-currency__info'>
            <div className='page-currency__info-circle'>
              <h4>Rank</h4>
              <h5>{data.rank}</h5>
            </div>
            <div className='page-currency__info-circle'>
              <h4>{`${data.name} (${data.symbol})`}</h4>
              <h5>
                {convertToThousands(data.priceUsd)} (
                {`${convertToPercentage(data.changePercent24Hr)}%`})
              </h5>
            </div>
            <div className='page-currency__info-circle'>
              <h4>Market Cap</h4>
              <h5>{convertToMillions(data.marketCapUsd)}</h5>
            </div>
            <div className='page-currency__info-circle'>
              <h4>Supply</h4>
              <h5>{`${convertToMillions(data.supply)} ${
                data.symbol
              }`}</h5>
            </div>
            <div className='page-currency__info-circle'>
              <h4>Volume (24Hr)</h4>
              <h5>{convertToMillions(data.volumeUsd24Hr)}</h5>
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
            name={data.name}
          />
        </>
      )}
    </div>
  );
};
