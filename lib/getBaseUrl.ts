import { cache } from 'react';

export const getBaseUrl = cache(() =>
  process.env.use_vercel_endpoint
    ? `https://app-dir.vercel.app`
    : `https://black-bush-07adf8a00.3.azurestaticapps.net/`,
);
