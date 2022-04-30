import walletImage from '../images/purse.png';
import { ContainerInfoWallet, InfoAccountWallet, InfoMovementWallet } from '../styles/ContainerInfoWallet';

const InfoWallet = () => {
  return (
    <>
      <ContainerInfoWallet>
        <InfoAccountWallet>
          <img src={walletImage} alt="" />
          <div>
            <p>Cuenta ioBuilders</p>
            <p>500$</p>
          </div>
        </InfoAccountWallet>
        <InfoMovementWallet>
          <div>
            <p>Últimos Movimientos</p>
            <p>Ver más</p>
          </div>
          <div>
            <p>Cotización Autónomo</p>
            <p>25$</p>
          </div>
          <div>
            <p>Mercadona</p>
            <p>158$</p>
          </div>
          <div>
            <p>Farmacia chapi</p>
            <p>10$</p>
          </div>
        </InfoMovementWallet>
      </ContainerInfoWallet>
    </>
  )
}


export default InfoWallet