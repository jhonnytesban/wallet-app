import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContainerApp } from "../styles/ContainerApp";
import { ContainerInfoWallet } from "../styles/ContainerInfoWallet";

const Login = () => {
  return (
    <>
      <ContainerApp>
        <StyledContainer>
          <h2>Inicio de Sesión</h2>
          <form>
            <TextField 
              required
              id="outlined-required"
              label="Nombre de Usuario"
              type="text"
              sx={{ mb: 2}}
            />
            <TextField 
              required
              id="outlined-required"
              label="Contraseña"
              type="password"
              sx={{ mb: 2}}
            />
            <div>
              <input type="submit" value="Iniciar Sesión" />
              <span>¿No tienes una cuenta? <Link to='/register' >Regístrate</Link></span>
            </div>
          </form>
        </StyledContainer>
      </ContainerApp>
    </>
  )
}

const StyledContainer = styled(ContainerInfoWallet)`
  form {
    div{
      display: block;
      span {
        font-size: .8rem;
        text-align: center;
      }
    }
    div:nth-child(3) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media screen and (min-width: 700px) {
    h2 {
      text-align: center;
    } 
  }

`

export default Login