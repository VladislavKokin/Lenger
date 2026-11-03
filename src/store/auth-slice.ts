import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AuthUser } from '../../shared/api'

type AuthState = {
  user: AuthUser | null
}

const initialState: AuthState = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
  selectors: {
    selectUser: (state) => state.user,
  },
})

export const { setUser, logout } = authSlice.actions
export const { selectUser } = authSlice.selectors