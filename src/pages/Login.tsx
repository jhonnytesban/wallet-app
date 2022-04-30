import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { ContainerApp } from "../styles/ContainerApp";
import { StyledContainerForm } from "../styles/ContainerForm";

const Login = () => {
  return (
    <>
      <ContainerApp>
        <StyledContainerForm>
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
        </StyledContainerForm>
      </ContainerApp>
    </>
  )
}

export default Login;