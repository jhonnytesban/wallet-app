import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DepositPage = () => {
  return (
    <>
      <ContainerDepositPage>
        <StyledLink to='/'>Volver</StyledLink>
        <form>
          <TextField 
            required
            // id="outlined-required"
            label="Dinero Ingresar"
            type="number"
            defaultValue="Hello World"
          />
        </form>
      </ContainerDepositPage>
    </>
  )
}

const ContainerDepositPage = styled.div`
  padding: 0 1rem;
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin-bottom: 1rem;
`
