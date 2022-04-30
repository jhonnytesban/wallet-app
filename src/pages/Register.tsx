import { TextField } from "@mui/material";
import { ContainerApp } from "../styles/ContainerApp";
import { StyledContainerForm } from "../styles/ContainerForm";

const Register = () => {
  return (
    <>
      <ContainerApp>
        <StyledContainerForm>
          <h2>Registro de Usuario</h2>
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
              <input type="submit" value="Registrar" />
            </div>
          </form>
        </StyledContainerForm>
      </ContainerApp>
    </>
  )
}



export default Register;