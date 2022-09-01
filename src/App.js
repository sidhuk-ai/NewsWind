// https://sidhuk-ai.github.io/ my website
import React,{useState} from 'react'
import NavBar from './components/Navbar';
import News from './components/NewsComponent';
import SignIn from './components/SignIn';
import NewsLetter from './components/NewsLetter';
import StartPage from './components/StartPage';
import ScrollToTop from "react-scroll-to-top";
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { Dialog, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';

function App() {

  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [mode, setmode] = useState("light");
  const [isDarkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMod, setOpenMod] = useState(navigator.onLine ? false : true);
  const [msg, setMsg] = useState('');
  const toggleDarkMode = () => {
    if (isDarkMode === false) {
      setDarkMode(true);
      setMsg('Dark mode enabled');
      setOpen(true);
      setmode("dark");//example color for dark mode:- #424244
      document.body.style.backgroundColor = "#212529";
      document.body.style.transitionDuration = '0.7s';
      localStorage.setItem('webTheme','dark');
    }
    else{
      setDarkMode(false);
      setOpen(true);
      setMsg('Light mode enabled');
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.transitionDuration = '0.7s';
    }
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }else{
      setOpen(false);
      setOpenMod(false);
    }
  };
  const refreshPage = () => {
    window.location.reload();
  }
  return (
    <div>
    <ScrollToTop smooth top={600} style={{display:'initial'}}/>
      <Router>
        <NavBar myhome="Home" mode={mode} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        <div className="container border-2">
          <span style={{height:"20px"}} data-bs-toggle="tooltip" data-bs-placement="bottom" title='Toggle Dark/Light Mode' >
            <DarkModeSwitch
              className='fixed right-1 top-[80px] backdrop-blur-xl border-2 rounded-md z-50'
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={35}
              moonColor='purple'
            />
          </span>
        </div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="info" sx={{ width: '100%' }}>
          {msg}
        </Alert>
        </Snackbar>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />
        <Dialog
        open={openMod}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
          <div>
            <img className=' h-[141px] p-[6px] pl-[10px]' src="https://m.media-amazon.com/images/M/MV5BNzU3MjZmYjUtM2JjYS00ZjY3LWI2YzQtYjRmYTJmNTJhZGRmXkEyXkFqcGdeQXVyNDk2MzgwNjE@._V1_.jpg" alt="Offline"/>
          </div>
          <div className='font-mono font-bold m-4'>
            You seems to be offline
          </div>
        <DialogActions className='flex justify-center'>
          <Button className='' onClick={refreshPage}>Reload</Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
        </Dialog>
        <Switch>
          <Route exact path="/"><StartPage mode={mode}/></Route>
          {/* <Route exact path=""><StartPage mode={mode}/></Route> */}
          <Route exact path="/general"><News key="general" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="general" mode={mode}/></Route>
          <Route exact path="/science"><News key="science" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="science" mode={mode}/></Route>
          <Route exact path="/sports"><News key="sports" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="sports" mode={mode}/></Route>
          <Route exact path="/entertainment"><News key="entertainment" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment" mode={mode}/></Route>
          <Route exact path="/technology"><News key="technology" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="technology" mode={mode}/></Route>
          <Route exact path="/signin"><SignIn mode={mode}/></Route>
          <Route exact path="/newsletter"><NewsLetter mode={mode}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App