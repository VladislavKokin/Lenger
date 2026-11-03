import { baseApi } from '../base-api'
import type { AuthResponse, UpdateUserData } from '../types'

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        updateUser: build.mutation<AuthResponse, UpdateUserData>({
            query: (body) => ({ url: '/user', method: 'PATCH', body }),
        }),
        deleteUser: build.mutation<void, void>({
            query: () => ({ url: '/user', method: 'DELETE' }),
        }),
    }),
})

export const { useUpdateUserMutation, useDeleteUserMutation } = userApi