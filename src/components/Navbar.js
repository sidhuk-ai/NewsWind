import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import workflow from './workflow.svg';
import Button from '@mui/material/Button';

export default function Navbar(props) {

return (
    <div>
        <nav className={`navbar navbar-expand-lg fixed-top shadow p-3 backdrop-blur-md`} style={{backgroundColor: props.mode==="dark"?"#0f172abf":"#ffffffb8", color: props.mode==="dark"?"white":"black"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/general">
                    <img className="h-8 w-auto sm:h-[2.2rem]" src={workflow} alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-black"></span>
                </button>
                <div className="collapse navbar-collapse justify-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 px-[1rem] tracking-[2px]" aria-current="page" to="/general">{props.myhome}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 px-[1rem] tracking-[2px]" to="/science">Science</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 px-[1rem] tracking-[2px]" to="/sports">Sports</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 px-[1rem] tracking-[2px]" to="/entertainment">Entertainment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active_class' className="py-2 px-[1rem] tracking-[2px]" to="/technology">Technology</NavLink>
                        </li>
                    </ul>
                    
                </div>
                <div>
                    <Link to="/newsletter"><Button className='rounded' variant='text' color='error'>NEWSLETTER</Button></Link>
                </div>
            </div>
        </nav>
    </div>
)
}

Navbar.prototype = {
    myhome: PropTypes.string
}