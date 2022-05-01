import InfoWallet from "./components/InfoWallet";
import AccountBalance from "./components/AccountBalance";
import ActionComponent from "./components/ActionComponent";
import { ContainerApp } from "./styles/ContainerApp";
import { useSelector } from "react-redux";
import { selectUser } from "./store/slice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const { user } = useSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
      if (user.login === false) {
        navigate('/login', {replace: true})
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
