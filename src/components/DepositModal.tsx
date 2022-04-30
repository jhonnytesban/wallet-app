import styled from 'styled-components';
import { Box } from '@mui/system';
import { Modal, TextField, Typography } from '@mui/material';

//TODO: DepositModal necesita validar si es Transferencia y a que usuario o Deposito en la cuenta del usuario Dueño

const DepositModal = ({open, handleClose}: Props) => {

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Desea Ingresar?
          </Typography>
          <StyledForm>
            <TextField 
              required
              id="outlined-required"
              label="Dinero Ingresar"
              type="number"
              defaultValue="Hello World"
              sx={{ mt: 2, mb: 2}}
            />
            <input type="submit" value="Ingresar" />
          </StyledForm>
        </StyledBox>
      </Modal>
    </>
  );
}

type Props = {
  open: boolean;
  handleClose: () => void;
}

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 24px;
  padding: 1rem;

  @media screen and (min-width: 700px) {
    width: initial;
  }
`

const StyledForm = styled.form`
  input {
    display: block;
  }
`

export default DepositModal