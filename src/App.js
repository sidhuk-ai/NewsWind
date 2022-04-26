// https://sidhuk-ai.github.io/newsindk/ my website
import React,{useState} from 'react'
import NavBar from './components/Navbar';
import News from './components/NewsComponent';
import SignIn from './components/SignIn';
import NewsLetter from './components/NewsLetter';
import StartPage from './components/StartPage';
import ScrollToTop from "react-scroll-to-top";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';

function App() {
  // const [data, setData] = useState('');
  // const childtoParent = () => {

  // }
  const pageSize = 6;
  // const apiKey = "e49bb08ca8ca4997b7e1818deb503703";
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [mode, setmode] = useState("light");
  const [isDarkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const toggleDarkMode = () => {
    if (isDarkMode === false) {
      setDarkMode(true);
      setMsg('Dark mode enabled');
      setOpen(true);
      setmode("dark");//example color for dark mode:- #424244
      document.body.style.backgroundColor = "#212529";
      document.body.style.transitionDuration = '0.7s';
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
    }
  };
  return (
    <div>
    <ScrollToTop smooth top={600}/>
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
        <Switch>
          <Route exact path="/newsindk"><StartPage mode={mode}/></Route>
          <Route exact path="/newsindk/general"><News key="general" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="general" mode={mode}/></Route>
          <Route exact path="/newsindk/science"><News key="science" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="science" mode={mode}/></Route>
          <Route exact path="/newsindk/sports"><News key="sports" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="sports" mode={mode}/></Route>
          <Route exact path="/newsindk/entertainment"><News key="entertainment" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment" mode={mode}/></Route>
          <Route exact path="/newsindk/technology"><News key="technology" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="technology" mode={mode}/></Route>
          <Route exact path="/newsindk/signin"><SignIn mode={mode}/></Route>
          <Route exact path="/newsindk/newsletter"><NewsLetter mode={mode}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App