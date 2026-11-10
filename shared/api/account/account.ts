import { baseApi } from '../base-api'
import type { Account, CreateAccountData, UpdateAccountData } from '../types'

export const accountApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAccounts: build.query<{ accounts: Account[] }, void>({
            query: () => '/accounts',
            providesTags: ['Account'],
        }),
        createAccount: build.mutation<{ account: Account }, CreateAccountData>({
            query: (body) => ({ url: '/accounts', method: 'POST', body }),
            invalidatesTags: ['Account'],
        }),
        updateAccount: build.mutation<
            { account: Account },
            { id: string; data: UpdateAccountData }
        >({
            query: ({ id, data }) => ({
                url: `/accounts/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Account'],
        }),
        deleteAccount: build.mutation<{ error: null }, string>({
            query: (id) => ({ url: `/accounts/${id}`, method: 'DELETE' }),
            invalidatesTags: ['Account'],
        }),
    }),
})

export const {
    useGetAccountsQuery,
    useCreateAccountMutation,
    useUpdateAccountMutation,
    useDeleteAccountMutation,
} = accountApi