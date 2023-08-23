import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { TableRow } from './TableRow';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';

import { store } from '../../../store/store';

import './TableRow.scss';

const meta: Meta<typeof TableRow> = {
  title: 'TableRow',
  component: TableRow,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof TableRow>;

export const Bitcoin: Story = {
  args: {
    changePercent24Hr: '-0.4318334465580034',
    id: 'bitcoin',
    marketCapUsd: '504809460764.5957999819365000',
    maxSupply: '21000000.0000000000000000',
    name: 'Bitcoin',
    priceUsd: '25940.0435887642765832',
    rank: '1',
    supply: '19460625.0000000000000000',
    symbol: 'BTC',
    volumeUsd24Hr: '4123284409.6746283983812074',
    vwap24Hr: '25911.8362873331906325',
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: 'bitcoin' },
        state: { fromPage: 'currency' },
      },
      routing: {
        path: '/currency/:id',
      },
    }),
  },
};
