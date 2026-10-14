export type AuthUser = {
    id: string
    name: string
    email: string
}

type AuthResponse = {
    error: string | null
    user?: AuthUser
}

type RegisterData = {
    name: string
    email: string
    password: string
}

export const registerUser = async (data: RegisterData): Promise<AuthResponse> => {
    const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })

    return response.json()
}
