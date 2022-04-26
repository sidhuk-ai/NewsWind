import React,{useState} from 'react';
import workflow from './workflow.svg';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide'
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const SignIn = (props) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: props.mode==='light'?'white':'black',
        border: '#000',
        borderRadius: '4px',
        boxShadow: 24,
        p: 4,
    };
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const [msg, setMsg] = useState('');
  const [open, setOpen] = useState(false);
  const onLoginSuccess = (res) => {
      setOpen(true)
      setMsg('You logged in Successfully')
    };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }else{
            setOpen(false);
            setOpenModal(false);
        }
    };
    return (
        <>
            <div className='flex justify-center mb-4'>
                <Button color='error' variant='outlined' className='!mt-28 !font-bold' onClick={handleOpen}>Notice*</Button>
            </div>
            <div className='d-flex align-items-center justify-content-center flex-wrap'>
                <div className="min-h-full flex items-center justify-center py-12 px-[1rem] sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img
                                className="mx-auto h-16 w-auto"
                                src={workflow}
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold" style={{color:props.mode==="dark"?"white":"rgba(17,24,39,1)"}}>Sign in to your account</h2>
                        </div>
                    </div>
                </div>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} TransitionComponent={Slide}>
                    <Alert severity="success" variant='outlined' sx={{ width: '100%' }}>
                        <p style={{color:props.mode==='light'?'black':'white'}}>
                            {msg}
                        </p>
                    </Alert>
                </Snackbar>
                <form onSubmit={onLoginSuccess} className='pt-[13px] pb-6 px-[20px] rounded-lg shadow-md' style={{ boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)", backgroundColor:props.mode==="dark"?"#6b6b6b":"#eff1f4"}}>
                    <div className="mb-3">
                        <TextField id='outlined-basic' label='Email' variant='outlined' color={`${props.mode==='dark'?'warning':'secondary'}`} fullWidth={true} required={true}/>
                        {/* <input type="email" className="form-control" value={credentials.email} onChange={onChanges} id="exampleInputEmail1" aria-describedby="emailHelp"/> */}
                    </div>
                    <div className="mb-3">
                        <TextField id='outlined-password-input' type='password' label='Password' variant='outlined' color={`${props.mode==='dark'?'warning':'secondary'}`} fullWidth={true} required={true}/>
                        {/* <input type="password" className="form-control" value={credentials.password} onChange={onChanges} id="exampleInputPassword1"/> */}
                    </div>
                    <button type="submit" className="btn bg-blue-700 fw-bold text-white hover:bg-blue-800 block text-base w-[283px]">Submit</button>
                    <span className='d-flex justify-content-center mt-2'>
                        <a href="/newsindk" className='text-xs hover:!underline'>Forgotten password?</a>
                    </span>
                    <hr className='mt-4 mb-4' />
                    <a href="/newsindk" className='text-lg text-center font-bold block hover:!underline'>Create New Account</a>
                </form>
                <div>
                    <Modal
                        open={openModal}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" className='!font-mono !text-center' variant="h6" component="h2" sx={{color:props.mode==='light'?'black':'white'}}>
                            Information
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, color:props.mode==='light'?'black':'white'}}>
                            If you are unable to see the news, then no need to sign in.
                        </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default SignIn