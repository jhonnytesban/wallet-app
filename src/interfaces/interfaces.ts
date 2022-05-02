export interface User {
  userName: string | undefined;
  login: boolean | undefined;
}

export interface Movements {
  user: string;
  value: number;
}

export interface Balance {
  income: number;
  expenses: number
}

export interface AppState {
  user: User;
  totalMoney: number;
  movements: Movements[];
  balance: Balance[];
}
