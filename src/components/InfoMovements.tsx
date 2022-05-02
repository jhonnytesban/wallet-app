import { useSelector } from 'react-redux'
import { selectUser } from '../store/slice'
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { AppState } from '../interfaces/interfaces';

const InfoMovements = () => {
  const [userLocal, setUserLocal] = useState<AppState>()
  const { movements, user } = useSelector(selectUser)

  useEffect(() => {
    const usersDataStorage: AppState[] = JSON.parse(localStorage.getItem('usersData')!);
    if (usersDataStorage !== null) {
      const userDataStorage = usersDataStorage.find((dataUser) => dataUser.user.userName === user.userName);
      setUserLocal(userDataStorage);
    }
  }, [movements, user.userName])
  

  return (
    <>
    {
      userLocal?.movements.length === 0 || userLocal === undefined ? (
        <div>
          <p>No has hecho ningún movimiento</p>
        </div>
      ): (
        userLocal.movements.map((movement) => {
          return (
            <div key={uuidv4()}>
              <p>{movement.user}</p>
              <p>{movement.value}$</p>
            </div>
          )
        })
      )
    }
    </>
  )
}

export default InfoMovements