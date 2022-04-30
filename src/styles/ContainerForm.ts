import styled from "styled-components";
import { ContainerInfoWallet } from "./ContainerInfoWallet";

export const StyledContainerForm = styled(ContainerInfoWallet)`
  form {
    div{
      display: block;
      span {
        font-size: .8rem;
        text-align: center;
      }
    }
    div:nth-child(3) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media screen and (min-width: 700px) {
    h2 {
      text-align: center;
    } 
  }

`