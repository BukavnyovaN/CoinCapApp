import { initTRPC } from '@trpc/server';
import axios from 'axios';
import { z } from 'zod';

export const t = initTRPC.create();
const url = `http://api.coincap.io/v2/assets`;

export const trpcRouter = t.router({
  assets: t.procedure
  .input(z.object({ limit: z.number().optional(), ids: z.string().optional(), offset: z.number().optional() }))
  .query(async (opts) => {
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
    .input(z.object({ id: z.string().optional(), interval: z.string() }))
    .query(async (opts) => {
      const id = opts.input.id || '';
      const interval = opts.input.interval;
      try {
        const response = await axios.get(
          url,
          {
            params: {
              id,
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
      const id = opts.input.id;
      try {
        const response = await axios.get(url,
          {
            params: {
              id
            }
          })
            return response.data.data;
      }catch(error) {
            console.log(error);
      }
    }),
});