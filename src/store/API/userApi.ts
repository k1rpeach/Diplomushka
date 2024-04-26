import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IPicks, IResponse } from './types';
import { baseUrl } from '../../utils/baseurl';


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://161.35.153.209:5430/api/' }),
  endpoints: (builder) => ({
    trackByID: builder.query<IPicks, IResponse>({
      query: (body) => ({
        url: "main",
        method: "GET",
        body
      })
    }),
    trackByID1: builder.query<IPicks, IResponse>({
      query: (body) => ({
        url: "main",
        method: "GET",
        body
      })
    }),
  }),
})


export const { useTrackByIDQuery } = userApi;