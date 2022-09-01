import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import workflow from './workflow.svg';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar(props) {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

return (
    <div>
        <nav className={`navbar navbar-expand-lg fixed-top shadow p-3 backdrop-blur-md`} style={{backgroundColor: props.mode==="dark"?"#0f172abf":"#ffffffb8", color: props.mode==="dark"?"white":"black",transitionDuration:'0.7s'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/newsindk">
                    <img className="h-8 w-auto sm:h-[2.2rem]" src={workflow} alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse lg:justify-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 my-1 px-[1rem] mx-1 tracking-[2px]" aria-current="page" to="/general">{props.myhome}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 my-1 px-[1rem] mx-1 tracking-[2px]" to="/science">Science</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 my-1 px-[1rem] mx-1 tracking-[2px]" to="/sports">Sports</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 my-1 px-[1rem] mx-1 tracking-[2px]" to="/entertainment">Entertainment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 my-1 px-[1rem] mx-1 tracking-[2px]" to="/technology">Technology</NavLink>
                        </li>
                    </ul>
                    
                </div>
                {/* Creating Authentication */}
                <div>
                    { 
                        isAuthenticated ? 
                            <li className='list-none'>
                                <Button color='secondary' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
                            </li>
                            : 
                            <li className='list-none'>
                                <Button variant='outlined' color='success' onClick={() => loginWithRedirect()}>Log In</Button>
                            </li>
                    }
                </div>
                {/* Authentication ^^^^ */}
                {isAuthenticated && 
                    <div className='dropdown'>
                        {/* <Link to="/newsindk/newsletter"><Button className='rounded' variant='text' color='error'>NEWSLETTER</Button></Link> */}
                        <IconButton className='dropdown-toggle after:content-none' aria-label="account" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={user.picture} className='w-9 h-9 rounded-3xl' alt={<AccountCircleIcon sx={{color : props.mode==='light'?'black':'white'}}/>} />
                        </IconButton>
                        <ul className="dropdown-menu" style={{left:-74,backgroundColor:props.mode==='light'?'white':'#01070d'}} aria-labelledby="dropdownMenuButton1">
                            {/* <li><Link className="dropdown-item" style={{color : props.mode==='light'?'black':'white'}} to="/newsindk/signin">Sign In</Link></li>
                            <li><Link className="dropdown-item" style={{color : props.mode==='light'?'black':'white'}} to="/newsindk/newsletter">Newsletter</Link></li> */}
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                        </ul>
                    </div>
                }

            </div>
            
        </nav>
    </div>
)
}

Navbar.prototype = {
    myhome: PropTypes.string
}