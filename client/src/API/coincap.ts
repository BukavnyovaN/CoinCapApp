import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IAssets {
  id?: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply?: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export interface IGetAssetsResponse {
  result: { data: IAssets[]};
}

export interface IGetAssetsRequest {
  search?: string;
  ids?: string;
  limit?: number;
  offset?: number;
}

export interface IGetAssetResponse {
  data: IAssets;
  timestamp: number;
}

export interface IGetAssetRequest {
  id?: string;
}

export interface IHistory {
  date: string;
  priceUsd: string;
  time: number;
}

export interface IGetAssetHisoryResponse {
  data: IHistory[];
  timestamp: number;
}

export interface IGetAssetHisoryRequest {
  id?: string;
  interval?: string;
}

export const coinCapApi = createApi({
  reducerPath: 'coinCapApp',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coin-cap-server.onrender.com' }),
  endpoints: (builder) => ({
    getAssets: builder.query<IGetAssetsResponse, IGetAssetsRequest>({
      query: ({ search = '', ids = '', limit = 20, offset = 0 }) =>
      `/trpc/assets?input={${limit && `"limit": ${limit}`}${ids && `, "ids":${ids}`}}`,
    }),
    getAsset: builder.query<IGetAssetResponse, IGetAssetRequest>({
      query: ({ id = '' }) => `/trpc/currensyInfo?input="${id && `${id}`}"`,
    }), 
    getAssetHistory: builder.query<
      IGetAssetHisoryResponse,
      IGetAssetHisoryRequest
    >({
      query: ({ id = '', interval = 'd1' }) =>
        `assets/${id && `${id}`}/history${interval && `?interval=${interval}`}`,
    }),
  }),
});

export const { useGetAssetsQuery, useGetAssetQuery, useGetAssetHistoryQuery } =
  coinCapApi;
