import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DepositModal from "./DepositModal";

const ActionComponent = () => {
  //TODO: Refactor Custom Hook
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = ():void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <>
      <ContainerAction>
        <li>
        <Button onClick={handleOpen}>Ingresar</Button>
        </li>
        <li>
          <p>Invertir</p>
        </li>
        <li>
          <Link to='/transfer'>Transferencia</Link>
        </li>
      </ContainerAction>
      <DepositModal open={open} handleClose={handleClose}/>
    </>
  )
}

const ContainerAction = styled.ul`
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 2rem auto;
`

export default ActionComponent