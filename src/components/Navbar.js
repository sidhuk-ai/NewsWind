import React from "react";
import {NavLink, Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import DarkmodeToggle from "./DarkMode/DarkmodeToggle";
import "./css/style.css";
import './DarkMode/style.scss';

export default function Navbar() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  // Hamburger Menu
  document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener('click', function() {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
      for (var x = 0; x < close.length; x++) {
        close[x].addEventListener('click', function() {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }

    if (backdrop.length) {
      for (var a = 0; a < backdrop.length; a++) {
        backdrop[a].addEventListener('click', function() {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }
  });

  return (
    <div className="z-[2] bg-black">
      {/* //? New Navbar */}
      <nav className="relative px-4 py-4 flex justify-between items-center bg-transparent">
        <Link className="text-3xl font-bold leading-none" to="/newsindk">
          <span className="comp select-none font-light text-4xl text-white">NewsWind</span>
        </Link>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3 duration-700">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <NavLink exact activeClassName="active_class" className="text-xl text-white hover:!text-blue-500" to="/general">
              Home
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active_class"
              className="text-xl  text-white hover:!text-blue-500"
              to="/science"
            >
              Science
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
          <NavLink
            exact
            activeClassName="active_class"
            className="text-xl  text-white hover:!text-blue-500"
            to="/sports"
          >
            Sports
          </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
          <NavLink
            exact
            activeClassName="active_class"
            className="text-xl  text-white hover:!text-blue-500"
            to="/entertainment"
          >
            Entertainment
          </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
          <NavLink
            exact
            activeClassName="active_class"
            className="text-xl text-white hover:!text-blue-500"
            to="/technology"
          >
            Technology
          </NavLink>
          </li>
        </ul>
        {/* Creating Authentication */}
        { 
          isAuthenticated ? 
          <li className="list-none hidden lg:ml-auto lg:inline-block transition duration-200 ">
              <Button color='secondary' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
          </li>
          : 
          <li className="list-none hidden lg:ml-auto lg:inline-block transition duration-200">
              <Button className="btn-mktg text-black hover:shadow-lg focus:shadow-lg active:shadow-lg" onClick={() => loginWithRedirect()}>
                Log In
                <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"/>
                  <path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Button>
          </li>
        }
        {/* //? Authentication */}
        {
          isAuthenticated &&
          <div className='dropdown'>
              <IconButton className='dropdown-toggle after:content-none' type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                  <img src={user.picture} className='w-9 h-9 rounded-3xl' alt={<AccountCircleIcon sx={{}}/>} />
              </IconButton>
              <ul className="dropdown-menu" style={{}} aria-labelledby="dropdownMenuClickableInside">
                <div className="m-3">
                  <li className="dropdown-item">{user.name}</li>
                  <hr className="my-1"/>
                  <li className="dropdown-item">{user.email}</li>
                </div>
              </ul>
          </div>
        }
        <div className="dark-mod">
            <DarkmodeToggle/>
        </div>
      </nav>
      {/* Hamburger Menu */}
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="ham-menu fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" to="/newsindk">
              <span className="comp font-light text-2xl">NewsWind</span>
            </Link>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                  <NavLink
                  exact
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  activeClassName="active_class"
                  to="/general"
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-1">
                  <NavLink
                  exact
                  activeClassName="active_class"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/science"
                >
                  Science
                </NavLink>
              </li>
              <li className="mb-1">
                  <NavLink
                  exact
                  activeClassName="active_class"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/sports"
                >
                  Sports
                </NavLink>
              </li>
              <li className="mb-1">
                  <NavLink
                  exact
                  activeClassName="active_class"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/entertainment"
                >
                  Entertainment
                </NavLink>
              </li>
              <li className="mb-1">
                  <NavLink
                  exact
                  activeClassName="active_class"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/technology"
                >
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              {
                isAuthenticated ? 
                  <li className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl">
                      <Button color='secondary' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
                  </li>
                  : 
                  <li className="block !px-4 !py-3 mb-3">
                      <Button variant='outlined' color='success' className="py-2 px-28" onClick={() => loginWithRedirect()}>Log In</Button>
                  </li>
            }
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2022</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}


