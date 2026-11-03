import { baseApi } from '../base-api'
import type { AuthResponse, LoginData } from '../types'

const authorizationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<AuthResponse, LoginData>({
            query: (body) => ({ url: '/login', method: 'POST', body }),
        }),
    }),
})

export const { useLoginMutation } = authorizationApi
