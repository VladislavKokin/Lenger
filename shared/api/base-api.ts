import type { SerializedError } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery, type BaseQueryFn, type FetchArgs } from '@reduxjs/toolkit/query/react'

const NETWORK_ERROR = 'Не удалось связаться с сервером'

const rawBaseQuery = fetchBaseQuery({ baseUrl: '/api' })

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, string> = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions)

  if (result.error) {
    return { error: NETWORK_ERROR }
  }

  const data = result.data as { error?: string | null }

  if (data?.error) {
    return { error: data.error }
  }

  return { data: result.data }
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
})

export const getErrorMessage = (error: string | SerializedError) =>
  typeof error === 'string' ? error : NETWORK_ERROR