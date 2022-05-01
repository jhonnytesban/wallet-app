import { Box } from '@mui/system';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BaseSyntheticEvent, useState } from 'react';
import { Modal, TextField, Typography } from '@mui/material';
import { deposit, transfer } from '../store/slice';


const DepositModal = ({open, handleClose, userTransfer}: Props) => {
  const [depositForm, setDepositForm] = useState<number>(0)

  const location = useLocation();
  const dispatch = useDispatch();
  

  const handleChange = (event: BaseSyntheticEvent): void => {
    setDepositForm(parseInt(event.target.value));
  }

  const handleSubmit =  (event: BaseSyntheticEvent): void => {
    event.preventDefault();
    if (depositForm === 0 || depositForm < 0 ) {
      alert('Los depósitos deben de ser superior a 0');
      handleClose();
      return;
    }

    if (location.pathname === '/') {
      dispatch(deposit(depositForm));
      handleClose();
    }

    if (location.pathname === '/transfer') {
      dispatch(transfer({depositForm, userTransfer}));
      handleClose();
    }

  }

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
          <StyledForm onSubmit={handleSubmit}>
            <TextField 
              required
              label="Dinero Ingresar"
              type="number"
              sx={{ mt: 2, mb: 2}}
              name='depositForm'
              onChange={handleChange}
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
  userTransfer?: string;
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