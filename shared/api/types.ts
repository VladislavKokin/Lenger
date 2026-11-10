export type AuthUser = {
    id: string
    name: string
    email: string
}

export type AuthResponse = {
    error: string | null
    user?: AuthUser
}

export type LoginData = {
    email: string
    password: string
}

export type RegisterData = {
    name: string
    email: string
    password: string
}

export type UpdateUserData = Partial<{
    name: string
    settings: { theme: 'dark' | 'light' }
}>

export type Category = {
    id: string
    name: string
    icon: string
    type: 'expense' | 'income'
    color: string
}

export type CreateCategoryData = Omit<Category, 'id'>

export type UpdateCategoryData = Pick<Category, 'name' | 'icon' | 'color'>
