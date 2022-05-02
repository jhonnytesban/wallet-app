import { useState } from 'react';
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from '../store/slice';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const {user } = useSelector(selectUser);
  const dispatch = useDispatch()

  const handleShowMenu = (): void => {
    setToggleMenu(!toggleMenu)
  }

  const handleSession = () => {
    setToggleMenu(!toggleMenu)
    dispatch(logout())
  }

  return (
    <>
      <StyledNavbar>
        <StyledMenuIcon onClick={handleShowMenu}/>
        <MenuContainer showMenu={toggleMenu}>
          <ul>
            {
              user.login ? (
                <>
                  <li onClick={handleSession} className="list-link">Usuario: {user.userName}</li>
                  <li onClick={handleSession} className="list-link">Cerrar Sesión</li>
                </>
                ) : (
                <>
                <li><Link onClick={handleShowMenu} to={'/login'} className="list-link">Iniciar Sesión</Link></li>
                <li><Link onClick={handleShowMenu} to={'/register'} className="list-link">Registrarte</Link></li>
                </>
              )
            }
          </ul>
        </MenuContainer>
      </StyledNavbar>
    </>
  )
}


//TODO: Refactor Menu component 

type Props = {
  showMenu: boolean;
}

const StyledNavbar = styled.div`
  margin-bottom: 1rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #8989ff;
    padding: 1.5rem 1rem;
    box-shadow: 0 2px 8px -1px black;

    li {
      margin: 0 10px;
      font-weight: 600;
    }
    
    li a{
      text-decoration: none;
      color: black;
      font-weight: 600;
    }

  }
  
  @media screen and (min-width: 700px){
    svg {
      position: absolute;
      left: -110%;
    }

    div {
      position: static;
    }
    
    ul {
      position: fixed;
      top: 0;
      width: 100%;
      padding: 1rem;
      li a{
        margin: 10px;
      }

      li:nth-child(2) {
        margin-right: 50px;
        cursor: pointer;
      }
    }

  }
  @media screen and (min-width: 1200px) {
    ul {
      padding: 1.5rem 1rem;
      li{
        margin-right: 40px;
      }
      
      li:nth-child(2) {
        margin-right: 200px;
      }
    }
  }
`

const StyledMenuIcon = styled(MenuIcon)`
  background-color: #fff;
  position: fixed;
  border-radius: 5px;
  box-shadow: 0 0 8px -2px black;
  top: 0;
  margin: 1rem;
  padding: .5rem;
  z-index: 1000;
`

const MenuContainer = styled.div<Props>`
  width: 100%;
  text-align: right;
  position: fixed;
  top: 0;
  right: ${(props) => props.showMenu ? '0' : '-100%'};
  transition-property: right;
  transition-duration: .5s;
`;

export default Menu