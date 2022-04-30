import styled from "styled-components";

export const ContainerInfoWallet = styled.div`
  width: 80%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px -4px black;
  margin: auto;
  padding: 1rem;
  margin-top: 4.5rem;
  margin-bottom: 2rem;
`

export const InfoAccountWallet = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 35px;
  }

  div {
    margin-left: 20px;

    p:nth-child(1) {
      font-size: .8rem;
      font-weight: 300;
    }
    p:nth-child(2) {
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`

export const InfoMovementWallet = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .9rem;
    font-weight: 300;
    margin-bottom: 5px;
  }

  div:nth-child(1){
    margin-bottom: 10px;
  }
`