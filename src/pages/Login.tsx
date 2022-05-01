import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { ContainerApp } from "../styles/ContainerApp";
import { StyledContainerForm } from "../styles/ContainerForm";
import { useUser } from "../hooks/useUser";

const Login = () => {
  const { handleChange, handleLogin, formData } = useUser();
  

  return (
    <>
      <ContainerApp>
        <StyledContainerForm>
          <h2>Inicio de Sesión</h2>
          <form onSubmit={handleLogin}>
            <TextField 
              required
              label="Nombre de Usuario"
              type="text"
              sx={{ mb: 2}}
              name='userName'
              value={formData.userName}
              onChange={handleChange}
              />
            <TextField 
              required
              label="Contraseña"
              type="password"
              sx={{ mb: 2}}
              name='password'
              value={formData.password}
              onChange={handleChange}
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