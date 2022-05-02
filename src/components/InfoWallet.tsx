import { useSelector } from 'react-redux';
import { selectUser } from '../store/slice';
import walletImage from '../images/purse.png';
import { ContainerInfoWallet, InfoAccountWallet, InfoMovementWallet } from '../styles/ContainerInfoWallet';
import InfoMovements from './InfoMovements';

const InfoWallet = () => {
  const { totalMoney } = useSelector(selectUser)

  return (
    <>
      <ContainerInfoWallet>
        <InfoAccountWallet>
          <img src={walletImage} alt="icon wallet" />
          <div>
            <p>Cuenta ioBuilders</p>
            <p>{totalMoney}$</p>
          </div>
        </InfoAccountWallet>
        <InfoMovementWallet>
          <div>
            <p>Últimos Movimientos</p>
            <p>Ver más</p>
          </div>
          <InfoMovements />
        </InfoMovementWallet>
      </ContainerInfoWallet>
    </>
  )
}


export default InfoWallet