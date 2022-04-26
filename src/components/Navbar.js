import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import workflow from './workflow.svg';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar(props) {

return (
    <div>
        <nav className={`navbar navbar-expand-lg fixed-top shadow p-3 backdrop-blur-md`} style={{backgroundColor: props.mode==="dark"?"#0f172abf":"#ffffffb8", color: props.mode==="dark"?"white":"black"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/newsindk">
                    <img className="h-8 w-auto sm:h-[2.2rem]" src={workflow} alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse justify-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 my-1 px-[1rem] mx-1 tracking-[2px]" aria-current="page" to="/newsindk/general">{props.myhome}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 my-1 px-[1rem] mx-1 tracking-[2px]" to="/newsindk/science">Science</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 my-1 px-[1rem] mx-1 tracking-[2px]" to="/newsindk/sports">Sports</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 my-1 px-[1rem] mx-1 tracking-[2px]" to="/newsindk/entertainment">Entertainment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 my-1 px-[1rem] mx-1 tracking-[2px]" to="/newsindk/technology">Technology</NavLink>
                        </li>
                    </ul>
                    
                </div>
                <div className='dropdown'>
                    {/* <Link to="/newsindk/newsletter"><Button className='rounded' variant='text' color='error'>NEWSLETTER</Button></Link> */}
                    <IconButton className='dropdown-toggle after:content-none' aria-label="account" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <AccountCircleIcon sx={{color : props.mode==='light'?'black':'white'}}/>
                    </IconButton>
                    <ul className="dropdown-menu" style={{left:-74,backgroundColor:props.mode==='light'?'white':'#01070d'}} aria-labelledby="dropdownMenuButton1">
                        <li><Link className="dropdown-item" style={{color : props.mode==='light'?'black':'white'}} to="/newsindk/signin">Log In</Link></li>
                        <li><Link className="dropdown-item" style={{color : props.mode==='light'?'black':'white'}} to="/newsindk/newsletter">Newsletter</Link></li>
                    </ul>
                </div>

            </div>
        </nav>
    </div>
)
}

Navbar.prototype = {
    myhome: PropTypes.string
}