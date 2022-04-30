import styled from "styled-components";
import Menu from "./components/Menu";
import InfoWallet from "./components/InfoWallet";
import AccountBalance from "./components/AccountBalance";
import ActionComponent from "./components/ActionComponent";

const App = () => {
  return (
    <>
      <Menu />
      <ContainerApp>
        <ActionComponent />
        <InfoWallet />
        <AccountBalance />
      </ContainerApp>
    </>
  );
}

const ContainerApp = styled.div`
  padding: 0 1rem;
`

export default App;
