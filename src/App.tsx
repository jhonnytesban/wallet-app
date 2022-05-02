import InfoWallet from "./components/InfoWallet";
import AccountBalance from "./components/AccountBalance";
import ActionComponent from "./components/ActionComponent";
import { ContainerApp } from "./styles/ContainerApp";
import { useSelector } from "react-redux";
import { selectUser } from "./store/slice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppState } from "./interfaces/interfaces";
// import { useDataPersistence } from "./hooks/useDataPersistence";

const App = () => {
  // const { usersData, saveFirstDataUSer } = useDataPersistence();
  const [usersData, setUsersData] = useState<AppState[]>([])
  const userState = useSelector(selectUser);


  const { user } = useSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
      if (user.login === false) {
        navigate('/login', {replace: true});
        return
      }

      const dataStorage: AppState[] = JSON.parse(localStorage.getItem('usersData')!)
      
      //Guardo el dato del usuario en el storage si aun no se ha registrado ningun usuario
      if (dataStorage?.length === 0 || dataStorage === null) {
        setUsersData([userState])
        localStorage.setItem('usersData', JSON.stringify([userState]))
        console.log('save', usersData)
      }

      //Añado al storage los datos del usuario, en caso de que ya existan otros datos de usuarios
      if (dataStorage?.length > 0) {
        const isUser = dataStorage.some((data) => data.user.userName === user.userName);

        if (!isUser) {
          const newDataUser = dataStorage.concat(userState)
          localStorage.setItem('usersData', JSON.stringify(newDataUser))
        }
      }

  }, [user, navigate]) 

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
