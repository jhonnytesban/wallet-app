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
        <MenuIcon onClick={handleShowMenu}/>
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

// const MenuIconStyled = styled(MenuIcon)<Props>`
//   z-index: ${(props) => props.show ? '10000000' : '0'};
// `

const StyledNavbar = styled.div`
  @media screen and (min-width: 700px){
    svg {
      position: absolute;
      left: -110%;
    }

    div {
      /* display: flex;
      align-items: center;
      justify-content: center; */
      position: static;
    }
    
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        margin: 10px;
      }
    }
  }
`

const MenuContainer = styled.div<Props>`
  width: 100%;
  height: 100%;
  background-color: red;
  position: fixed;
  top: 0;
  left: ${(props) => props.show ? '0' : '-100%'};
  transition-property: left;
  transition-duration: .5s;
  z-index: ${(props) => props.show ? '-100' : '0'};
  
  ul {
    background-color: red;
  }
`;

export default Menu