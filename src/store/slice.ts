import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store';

export interface User {
  userName: string | undefined;
  login: boolean | undefined;
}

export interface AppState {
  user: User;
  totalMoney: number;
  movements: string[];
  totalEspenses: number;
  totalIncome: number
}

const initialState: AppState = {
  user: {
    userName: undefined,
    login: false
  },
  totalMoney: 500,
  movements: ['usuario A', 'usuario B'],
  totalEspenses: 900,
  totalIncome: 1000
}

export const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user.userName = action.payload
      state.user.login = true
    },
    
    register: (state, action) => {
      state.user.userName = action.payload
      state.user.login = true
    },

    logout: (state) => {
      state.user.login = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { logIn, register, logout } = appSlice.actions

export const selectUser = (state: RootState) => state.stateApp

export const reduceApp =  appSlice.reducer