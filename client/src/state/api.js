import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }), 
  reducerPath: 'adminApi',
  tagTypes: ['Properties'],

  endpoints: (build) => ({
    getProperties: build.query({
      query: () => "/properties",
      providesTags: ["Properties"], 
    }),
  }),
});

export const { useGetPropertiesQuery } = api; 
