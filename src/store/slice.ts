import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../interfaces/interfaces';
import { RootState } from './store';

const initialState: AppState = {
  user: {
    userName: undefined,
    login: false
  },
  totalMoney: 0,
  movements: [],
  balance: [{
    expenses: 0,
    income: 0
  }]
}

export const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user.userName = action.payload;
      state.user.login = true;


      const usersDataStorage: AppState[] = JSON.parse(localStorage.getItem('usersData')!);
      
      if (usersDataStorage !== null) {
        const userStorage = usersDataStorage.find((users) => users.user.userName === state.user.userName);
        const userStorageFilter = usersDataStorage.filter((users) => users.user.userName !== state.user.userName);

        if (userStorage !== undefined) {
          state.totalMoney = userStorage.totalMoney;
          const newUsersDataStorage = userStorageFilter.concat(userStorage);
          localStorage.setItem('usersData', JSON.stringify(newUsersDataStorage));
        }
      }
    },
    
    register: (state, action) => {
      state.user.userName = action.payload;
      state.user.login = true;

      const usersDataStorage: AppState[] = JSON.parse(localStorage.getItem('usersData')!);
      
      if (usersDataStorage !== null) {
        const userStorage = usersDataStorage.find((users) => users.user.userName === state.user.userName);
        const userStorageFilter = usersDataStorage.filter((users) => users.user.userName !== state.user.userName);

        if (userStorage !== undefined) {
          state.totalMoney = userStorage.totalMoney;
          const newUsersDataStorage = userStorageFilter.concat(userStorage);
          localStorage.setItem('usersData', JSON.stringify(newUsersDataStorage));
        }
      }
    },

    logout: (state) => {
      state.user.login = false;
    },

    deposit: (state, action) => {
      const usersDataStorage: AppState[] = JSON.parse(localStorage.getItem('usersData')!);
      const userStorage = usersDataStorage.find((users) => users.user.userName === state.user.userName);
      const userStorageFilter = usersDataStorage.filter((users) => users.user.userName !== state.user.userName);

      if (userStorage !== undefined) {
        userStorage.totalMoney += action.payload;
        userStorage.movements.unshift({user: 'Depósito', value: action.payload});
        userStorage.balance[0].income += action.payload;
        const newUsersDataStorage = userStorageFilter.concat(userStorage);
        localStorage.setItem('usersData', JSON.stringify(newUsersDataStorage));
      }

      state.totalMoney += action.payload;
      state.movements.unshift({user: 'Depósito', value: action.payload});
      state.balance[0].income += action.payload;
    },
    
    transfer: (state, action) => {
      const usersDataStorage: AppState[] = JSON.parse(localStorage.getItem('usersData')!);
      const userStorage = usersDataStorage.find((users) => users.user.userName === state.user.userName);
      const userStorageFilter = usersDataStorage.filter((users) => users.user.userName !== state.user.userName);

      if (userStorage !== undefined) {
        userStorage.totalMoney -= action.payload.depositForm;
        userStorage.movements.unshift({user: `Transferencia ${action.payload.userTransfer}`, value: action.payload.depositForm});
        userStorage.balance[0].expenses += action.payload.depositForm;
        const newUsersDataStorage = userStorageFilter.concat(userStorage);
        localStorage.setItem('usersData', JSON.stringify(newUsersDataStorage));
      }

      state.totalMoney -= action.payload.depositForm;
      state.movements.unshift({user: `Transferencia ${action.payload.userTransfer}`, value: action.payload.depositForm});
      state.balance[0].expenses += action.payload.depositForm;
    }
  },
})

export const { logIn, register, logout, deposit, transfer } = appSlice.actions;

export const selectUser = (state: RootState) => state.stateApp;

export const reduceApp =  appSlice.reducer;