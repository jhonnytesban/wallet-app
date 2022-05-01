import { useState } from 'react';
import styled from 'styled-components';
import { Bar, BarChart, YAxis } from 'recharts';
import { ContainerInfoWallet } from '../styles/ContainerInfoWallet';

interface Balance {
  income: number;
  expenses: number
}

export const AccountBalance = () => {
  const [balanceData, setBalanceData] = useState<Balance[]>([
    {
      income: 1000,
      expenses: 900
    }
  ])

  return (
    <>
      <ContainerBalance>
        <div>
            <BarChart  width={150} height={100} data={balanceData}>
              <YAxis />
              <Bar dataKey="income" fill="#8884d8" />
              <Bar dataKey="expenses" fill="#82ca9d" />
            </BarChart>
        </div>
        <div>
          <StyledList>
            <li>
              <div>
                <p>1000$</p>
                <p>Ingresos</p>
              </div>
            </li>
            <li>
              <div>
                <p>900$</p>
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