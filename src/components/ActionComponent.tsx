import styled from "styled-components";

const ActionComponent = () => {
  return (
    <ContainerAction>
      <li>
        <p>Ingresar</p>
      </li>
      <li>
        <p>Transferencia</p>
      </li>
    </ContainerAction>
  )
}

const ContainerAction = styled.ul`
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 2rem auto;
`

export default ActionComponent