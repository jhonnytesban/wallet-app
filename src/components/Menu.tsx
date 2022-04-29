import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
// import '../styles/Menu.css';

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  const handleShowMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
      <StyledNavbar>
        <StyledMenuIcon show={toggleMenu} onClick={handleShowMenu}/>
        <MenuContainer show={toggleMenu}>
          <ul>
            <li className="list-link">Esto es un link</li>
            <li className="list-link">Esto es un link</li>
            <li className="list-link">Esto es un link</li>
            <li className="list-link">Esto es un link</li>
          </ul>
        </MenuContainer>
      </StyledNavbar>
    </>
  )
}


//TODO: Refactor Menu component 

type Props = {
  show: boolean;
}

const StyledNavbar = styled.div`
  margin-bottom: 1rem;
  
  @media screen and (min-width: 700px){
    svg {
      position: absolute;
      left: -110%;
    }

    div {
      position: static;
    }
    
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      width: 100%;
      li {
        margin: 10px;
      }
    }
  }
`

const StyledMenuIcon = styled(MenuIcon)<Props>`
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
  height: 100%;
  background-color: red;
  text-align: right;
  position: fixed;
  top: 0;
  right: ${(props) => props.show ? '0' : '-100%'};
  transition-property: right;
  transition-duration: .5s;
  
  ul {
    background-color: blue;
  }
`;

export default Menu