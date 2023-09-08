import { initTRPC } from '@trpc/server';
import axios from 'axios';
import { z } from 'zod';
import { configs } from "./configs";

export const t = initTRPC.create();
const baseUrl = configs.coincap.baseUrl;

export const trpcRouter = t.router({
  assets: t.procedure
  .input(z.object({ limit: z.number().optional(), ids: z.string().optional(), offset: z.number().optional() }))
  .query(async (opts) => {
    const url = baseUrl;
    const ids = opts.input.ids || '';
    const limit = opts.input.limit || '';
    const offset = opts.input.offset || '';
    try {
      const response = await axios.get(
        url,
        {
          params: {
            limit,
            ids,
            offset
          }
        }
      )
      return response.data.data;
    } catch(error) {
        console.log(error);
    }
  }),
  history: t.procedure
    .input(z.object({ id: z.string().optional(), interval: z.string().optional() }))
    .query(async (opts) => {
      const id = opts.input.id || '';
      const url = new URL(`${id}/history`, baseUrl).href
      const interval = opts.input.interval || '';
      try {
        const response = await axios.get(
          url,
          {
            params: {
              interval,
            }
          }
        )
        return response.data.data;
      }catch(error) {
            console.log(error);
        }
    }),
  currencyInfo: t.procedure
    .input(z.object({id: z.string().optional()}))
    .query(async (opts) => {
      const id = opts.input.id || '';
      const url = new URL(id, baseUrl).href;
      try {
        const response = await axios.get(
          url
        );
        console.log( response.data.data)
        return response.data.data;
      }catch(error) {
            console.log(error);
      }
    }),
});