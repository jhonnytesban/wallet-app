import InfoWallet from "./components/InfoWallet";
import AccountBalance from "./components/AccountBalance";
import ActionComponent from "./components/ActionComponent";
import { ContainerApp } from "./styles/ContainerApp";
import { useSelector } from "react-redux";
import { selectUser } from "./store/slice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppState } from "./interfaces/interfaces";

const App = () => {
  const userState = useSelector(selectUser);


  const { user } = useSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (user.login === false) {
      navigate('/login', {replace: true});
      return
    }

    const dataStorage: AppState[] = JSON.parse(localStorage.getItem('usersData')!)
      
    if (dataStorage?.length === 0 || dataStorage === null) {
      localStorage.setItem('usersData', JSON.stringify([userState]));
    }
    
    if (dataStorage?.length > 0) {
      const userStorage = dataStorage.find((data) => data.user.userName === user.userName);
      
      if (!userStorage) {
        const newDataUser = dataStorage.concat(userState);
        localStorage.setItem('usersData', JSON.stringify(newDataUser));
      }
    }
  }, [user, navigate, userState]) 

  return (
    <>
      <ContainerApp>
        <ActionComponent />
        <InfoWallet />
        <AccountBalance />
      </ContainerApp>
    </>
  );
}



export default App;
