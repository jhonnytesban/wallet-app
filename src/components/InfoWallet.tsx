import styled from 'styled-components';
import walletImage from '../images/purse.png';

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


//TODO: Refactor Component Styled

const ContainerInfoWallet = styled.div`
  width: 80%;
  border-radius: 10px;
  box-shadow: 0px 2px 8px -4px black;
  margin: auto;
  padding: 1rem;
  margin-top: 4.5rem;
`

const InfoAccountWallet = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
  }

  div {
    margin-left: 10px;
  }
`

const InfoMovementWallet = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export default InfoWallet