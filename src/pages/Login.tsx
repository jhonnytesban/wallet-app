import { BaseSyntheticEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from "@mui/material";
import { selectUser, logIn } from "../store/slice";
import { ContainerApp } from "../styles/ContainerApp";
import { StyledContainerForm } from "../styles/ContainerForm";

const Login = () => {
  const { user } = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(user)
  }, [])

  const handleLogin = (event: BaseSyntheticEvent): void => {
    event.preventDefault()
    dispatch(logIn())
  }
  

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
            />
            <TextField 
              required
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