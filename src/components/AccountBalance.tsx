import styled from 'styled-components';
import { Bar, BarChart, YAxis } from 'recharts';
import { ContainerInfoWallet } from '../styles/ContainerInfoWallet';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/slice';
import { useEffect, useState } from 'react';
import { AppState } from '../interfaces/interfaces';

export const AccountBalance = () => {
  const [userLocal, setUserLocal] = useState<AppState>()
  const { balance, user } = useSelector(selectUser);

  useEffect(() => {
    const usersDataStorage: AppState[] = JSON.parse(localStorage.getItem('usersData')!);
    if (usersDataStorage !== null) {
      const userDataStorage = usersDataStorage.find((dataUser) => dataUser.user.userName === user.userName);
      setUserLocal(userDataStorage);
    }
  }, [balance])
  

  return (
    <>
      <ContainerBalance>
        <div>
            <BarChart  width={150} height={100} data={userLocal?.balance}>
              <YAxis />
              <Bar dataKey="income" fill="#8884d8" />
              <Bar dataKey="expenses" fill="#82ca9d" />
            </BarChart>
        </div>
        <div>
          <StyledList>
            <li>
              <div>
                <p>{userLocal?.balance[0].income}$</p>
                <p>Ingresos</p>
              </div>
            </li>
            <li>
              <div>
                <p>{userLocal?.balance[0].expenses}$</p>
                <p>Gastos</p>
              </div>
            </li>
          </StyledList>
        </div>
      </ContainerBalance>
    </>
  )
}

const ContainerBalance = styled(ContainerInfoWallet)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin-top: 0;

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const StyledList = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: .9rem;
    font-weight: 300;
    margin-bottom: 15px;
  }

  li::before {
    content: " ";
    display: inline-flex;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
  }

  li:nth-child(1)::before {
    background-color: #8884d8;
  }

  li:nth-child(2)::before {
    background-color: #82ca9d;
  }
`

export default AccountBalance