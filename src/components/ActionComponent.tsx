import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import DepositModal from "./DepositModal";

const ActionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <p>Transferencia</p>
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