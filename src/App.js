// https://sidhuk-ai.github.io/newsindk/ my website
import React,{useState} from 'react'
import NavBar from './components/Navbar';
import News from './components/NewsComponent';
import StartPage from './components/StartPage';
import ScrollToTop from "react-scroll-to-top";
import Button from '@mui/material/Button'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { Dialog } from '@mui/material';
import Offline from './Offline.gif'

function App() {

  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [openMod, setOpenMod] = useState(navigator.onLine ? false : true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }else{
      setOpenMod(false);
    }
  };
  const refreshPage = () => {
    window.location.reload();
  }
  return (
    <>
    <ScrollToTop smooth top={600} style={{display:'initial'}}/>
      <Router>
        <NavBar myhome="Home"/>
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
          <div className='m-auto'>
            <img className=' h-[141px] p-[6px] pl-[10px]' src={Offline} alt="Offline"/>
          </div>
          <div className='font-mono font-bold m-4'>
            You seems to be offline
          </div>
          <Button className='' onClick={refreshPage}>Reload</Button>
        </Dialog>
        <Switch>
          <Route exact path="/newsindk"><StartPage/></Route>
          <Route exact path="/general"><News key="general" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="general"/></Route>
          <Route exact path="/science"><News key="science" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="sports"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment"/></Route>
          <Route exact path="/technology"><News key="technology" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="technology"/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App