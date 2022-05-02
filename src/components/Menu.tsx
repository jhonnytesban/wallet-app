import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from '../store/slice';
import { MenuContainer, StyledMenuIcon, StyledNavbar } from '../styles/Menu';

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const {user } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleShowMenu = (): void => {
    setToggleMenu(!toggleMenu);
  }

  const handleSession = () => {
    setToggleMenu(!toggleMenu);
    dispatch(logout());
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

export default Menu