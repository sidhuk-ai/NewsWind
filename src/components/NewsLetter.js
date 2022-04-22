import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import workflow from './workflow.svg';
import { Link } from 'react-router-dom';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='flex justify-center items-center flex-col mt-[160px]'>
      <div>
          <img
            className="mx-auto h-16 w-auto"
            src={workflow}
            alt="Workflow"
          />
        <h2 className="mt-6 text-center text-3xl font-extrabold" style={{color:props.mode==="dark"?"white":"rgba(17,24,39,1)"}}><Link className='text-blue-700 hover:underline' to='/newsindk/signin'>Sign in</Link> to your account</h2>
        <p className="mt-2 text-center text-sm" style={{color:props.mode==="dark"?"white":"rgba(208,210,224,1)"}}>
          Or{' '}
          Subscribe To Our Newsletter
        </p>
      </div>
      <Button className=' mt-2' variant="outlined" onClick={handleClickOpen}>
        Subscribe
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
