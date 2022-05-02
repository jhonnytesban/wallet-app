import { useSelector } from 'react-redux';
import { selectUser } from '../store/slice';
import walletImage from '../images/purse.png';
import { ContainerInfoWallet, InfoAccountWallet, InfoMovementWallet } from '../styles/ContainerInfoWallet';
import InfoMovements from './InfoMovements';
import { useEffect, useState } from 'react';
import { AppState } from '../interfaces/interfaces';

const InfoWallet = () => {
  const [userLocal, setUserLocal] = useState<AppState>();
  const { totalMoney, user } = useSelector(selectUser);

  useEffect(() => {
    const usersDataStorage: AppState[] = JSON.parse(localStorage.getItem('usersData')!);
    if (usersDataStorage !== null) {
      const userDataStorage = usersDataStorage.find((dataUser) => dataUser.user.userName === user.userName);
      setUserLocal(userDataStorage);
    }
  }, [totalMoney, user.userName])
  

  return (
    <>
      <ContainerInfoWallet>
        <InfoAccountWallet>
          <img src={walletImage} alt="icon wallet" />
          <div>
            <p>Cuenta ioBuilders</p>
            {
              userLocal?.totalMoney !== null ? (
                <p>{userLocal?.totalMoney}$</p>
              ): (
                <p>{totalMoney}$</p>
              )
            }
          </div>
        </InfoAccountWallet>
        <InfoMovementWallet>
          <div>
            <p>Últimos Movimientos</p>
          </div>
          <InfoMovements />
        </InfoMovementWallet>
      </ContainerInfoWallet>
    </>
  )
}


export default InfoWallet