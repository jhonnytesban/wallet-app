import Menu from "./components/Menu";
import InfoWallet from "./components/InfoWallet";
import AccountBalance from "./components/AccountBalance";
import ActionComponent from "./components/ActionComponent";

const App = () => {
  return (
    <>
      <Menu />
      <ActionComponent />
      <InfoWallet />
      <AccountBalance />
    </>
  );
}

export default App;
