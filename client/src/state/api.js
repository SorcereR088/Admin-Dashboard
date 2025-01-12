import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }), 
  reducerPath: 'adminApi',
  tagTypes: ['Properties', 'Clients'],

  endpoints: (build) => ({
    getProperties: build.query({
      query: () => "/properties",
      providesTags: ["Properties"], 
    }),

    getClients: build.query({
      query: (id) => '/clients',
      providesTags: ["Clients"], 
    }),

      updateClient: build.mutation({
        query: ({ id, ...updateData }) => ({
          url: `/clients/${id}`,
          method: 'PUT',
          body: updateData,
        }),
        invalidatesTags: ['Clients'],
      }),
  
  
      deleteClient: build.mutation({
        query: (id) => ({
          url: `/clients/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Clients'],
      }),
    }),
});

export const { useGetPropertiesQuery, useGetClientsQuery, useCreateClientMutation, useUpdateClientMutation, useDeleteClientMutation  } = api;
