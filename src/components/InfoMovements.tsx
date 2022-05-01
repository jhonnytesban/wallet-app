import { useSelector } from 'react-redux'
import { selectUser } from '../store/slice'
import { v4 as uuidv4 } from 'uuid';

const InfoMovements = () => {
  const { movements } = useSelector(selectUser)

  return (
    <>
    {
      movements.length === 0 ? (
        <div>
          <p>No has hecho ningún movimiento</p>
        </div>
      ): (
        movements.map((movement) => {
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