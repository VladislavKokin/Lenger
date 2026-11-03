import { baseApi } from '../base-api'
import type { AuthResponse, RegisterData } from '../types'

const registrationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        register: build.mutation<AuthResponse, RegisterData>({
            query: (body) => ({ url: '/register', method: 'POST', body }),
        }),
    }),
})

export const { useRegisterMutation } = registrationApi
