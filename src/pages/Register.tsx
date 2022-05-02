import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { ContainerApp } from "../styles/ContainerApp";
import { StyledContainerForm } from "../styles/ContainerForm";

const Register = () => {
  const { formData, handleChange, handleLogin } = useUser();

  return (
    <>
      <ContainerApp>
        <StyledContainerForm>
          <h2>Registro de Usuario</h2>
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
              <Button type="submit" size="small" variant="contained">Registrarse</Button>
              <span>¿Tienes una cuenta? <Link to='/login' >Inicia Sesión</Link></span>
            </div>
          </form>
        </StyledContainerForm>
      </ContainerApp>
    </>
  )
}



export default Register;