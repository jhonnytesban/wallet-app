import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { AppState } from "../interfaces/interfaces";
import { selectUser } from "../store/slice";

export const useDataPersistence = () => {
  const [usersData, setUsersData] = useState<AppState[]>([]);
  const {user, totalMoney, balance, movements} = useSelector(selectUser);

  const saveFirstDataUSer = () => {
    const userDataState = {
      user: user.userName,
      totalMoney,
      balance,
      movements
    }
    localStorage.setItem('usersData', JSON.stringify([userDataState]))
  }

  const getUserDataStorage = () => {
    const dataStorage: AppState[] = JSON.parse(localStorage.getItem('usersData')!)
    // setUsersData()
  }
  
  return {
    usersData,
    saveFirstDataUSer,
    getUserDataStorage
  }
}