import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DepositModal from "../components/DepositModal";
import { ContainerApp } from "../styles/ContainerApp"
import { ContainerInfoWallet } from "../styles/ContainerInfoWallet"

const TransferPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = ():void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <>
      <StyledContainerApp>
        <Link to='/'><ArrowBackIcon /></Link>
        <h2>¿A quién desea hacer transferencia?</h2>
        <ContainerInfoWallet onClick={handleOpen}>
          <p>Usuario A</p>
        </ContainerInfoWallet>
        <ContainerInfoWallet onClick={handleOpen}>
          <p>Usuario B</p>
        </ContainerInfoWallet>
        <ContainerInfoWallet onClick={handleOpen}>
          <p>Usuario C</p>
        </ContainerInfoWallet>
      </StyledContainerApp>
      <DepositModal open={open} handleClose={handleClose}/>
    </>
  )
}

const StyledContainerApp = styled(ContainerApp)`

  div {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 700px){
    padding: 0 20rem;
    h2 {
      margin-bottom: 4rem;
    }

    div {
      transform: scale(1);
      transition-property: transform;
      transition-duration: .3s;
      :hover {
        cursor: pointer;
        transform: scale(1.05);
        transition-property: transform;
        transition-duration: .5s;
      }
    }
  }
`

export default TransferPage