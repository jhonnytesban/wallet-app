import { Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const DepositModal = ({open, handleClose}: Props) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Desea Ingresar?
          </Typography>
          <form>
            <TextField 
              required
              id="outlined-required"
              label="Dinero Ingresar"
              type="number"
              defaultValue="Hello World"
              sx={{ mt: 2, mb: 2}}
            />
            <input type="submit" value="Ingresar" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}

type Props = {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: '#fff',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default DepositModal