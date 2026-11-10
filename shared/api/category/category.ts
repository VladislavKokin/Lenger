import { baseApi } from '../base-api'
import type { Category, CreateCategoryData, UpdateCategoryData } from '../types'

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
      getCategories: build.query<{ categories: Category[] }, void>({
        query: () => '/categories',
        providesTags: ['Category'],
      }),
      createCategory: build.mutation<{ category: Category }, CreateCategoryData>({
        query: (body) => ({ url: '/categories', method: 'POST', body }),
        invalidatesTags: ['Category'],
      }),
      updateCategory: build.mutation<{ category: Category }, { id: string; data: UpdateCategoryData }>({
        query: ({ id, data }) => ({ url: `/categories/${id}`, method: 'PATCH', body: data }),
        invalidatesTags: ['Category'],
      }),
      deleteCategory: build.mutation<{ error: null }, string>({
        query: (id) => ({ url: `/categories/${id}`, method: 'DELETE' }),
        invalidatesTags: ['Category'],
      }),
    }),
  })

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi
