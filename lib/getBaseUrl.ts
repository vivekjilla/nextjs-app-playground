import { cache } from 'react';

export const getBaseUrl = cache(() =>
  process.env.use_vercel_endpoint
    ? `https://app-dir.vercel.app`
    : `https://lively-desert-0ee4e3122.1.azurestaticappscanary.net/`,
);
