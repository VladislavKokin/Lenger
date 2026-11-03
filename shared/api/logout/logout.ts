import { baseApi } from '../base-api'

const logoutApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        logout: build.mutation<void, void>({
            query: () => ({ url: '/logout', method: 'POST' }),
        }),
    }),
})

export const { useLogoutMutation } = logoutApi
