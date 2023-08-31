import { initTRPC } from '@trpc/server';
import axios from 'axios';
import { z } from 'zod';

export const t = initTRPC.create();

export const trpcRouter = t.router({
  assets: t.procedure
  .input(z.object({ limit: z.number().optional(), ids: z.string().optional(), offset: z.number().optional() }))
  .query(async (opts) => {
    const ids = opts.input.ids || '';
    const limit = opts.input.limit || '';
    const offset = opts.input.offset || '';
    const url = `http://api.coincap.io/v2/assets?${limit && `limit=${limit}`}${ids && `&ids=${ids}`}${offset && `&offset=${offset}`}`;
    return axios.get(url) // `assets?${limit && `limit=${limit}`}${ids && `&ids=${ids}`}`
        .then(function (response) {
            return response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
  }),
  history: t.procedure
    .input(z.object({ id: z.string().optional(), interval: z.string() }))
    .query(async (opts) => {
      const id = opts.input.id || '';
      const interval = opts.input.interval;
      return axios.get(`https://api.coincap.io/v2/assets/${id}/history${interval && `?interval=${interval}`}`)
        .then(function (response) {
            return response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }),
  currencyInfo: t.procedure
    .input(z.object({id: z.string().optional()}))
    .query(async (opts) => {
      const id = opts.input.id;
      return axios.get(`https://api.coincap.io/v2/assets/${id && `${id}`}`)
        .then(function (response) {
            return response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }),
});