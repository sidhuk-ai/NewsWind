import {React, useEffect} from 'react';
import './css/style.css';
import Scroll from './Scroll';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Skeleton } from '@mui/material';
import SphereAnim from './SphereAnim';

function StartPage() {
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-home .contain .unordered a");
  
    window.onscroll = () => {
      var current = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
          a.classList.add("active");
        }
      });
    };
  });
  

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='start-page relative lg:z-[-1] lg:mt-4 min-h-[100vh] bg-white'>
      {/* // ? Top Element */}
      <div className='main-element'>
        <div className='svg-background h-[620px] pb-10 flex justify-center items-center flex-col lg:!flex-row lg:!-mt-4'>
          <div className='left-element lg:pl-6'>
            <h1 className='heading text-white font-extrabold'>
              Bringing you the <br /> latest news in,
              <span className="wrapper">
                <span className="word" style={{animationDelay:'00ms'}}>Science</span>
                <span className="word" style={{animationDelay:'1500ms'}}>Sports</span>
                <span className="word" style={{animationDelay:'3000ms'}}>Entertainment</span>
                <span className="word" style={{animationDelay:'4500ms'}}>Technology</span>
                <span className="word" style={{animationDelay:'6000ms'}}>Business</span>
                <span className="word" style={{animationDelay:'7500ms'}}>and many more</span>
                <span className="word" style={{animationDelay:'9000ms'}}>so do explore.</span>
              </span>
            </h1>
            <p className='para text-xl font-semibold text-white !mt-3 text-center md:!text-left md:mr-64 lg:!mr-0 lg:w-[608px] lg:!text-2xl'>This Newswind Website is just an example website created using <a href="https://reactjs.org/" className='font-bold bg-[#74b9ff63] !text-current rounded underline decoration-red-400 border-b-[#7dd3fc] px-1 hover:decoration-[#7dd3fc]' target='_blank' rel='noreferrer'>Reactjs</a> as a framework.</p>
          </div>
          <SphereAnim/>
        </div>
      </div>
      {/*//? Lottie Animation */}
      <div className="lottie min-h-[100vh] flex items-center flex-col flex-wrap">
        <div className="flex flex-row justify-around items-center">
          <div className="description text-5xl text-black">
            Breathe
            <span data-aos='zoom-in'> In </span>
            <span data-aos='zoom-in' data-aos-offset='350'> & </span>
            <span data-aos='zoom-in' data-aos-offset='471'> Out </span>
          </div>
          <div className="animation w-[40%] p-5">
            <Scroll/>
          </div>
        </div>
        <div className="p-6 my-16">
          <span className='text-5xl font-semibold text-black'>Scroll down to see more </span>
          <div className="animate-bounce text-5xl text-black text-center mt-2">
            <i className="bi bi-arrow-down"></i>
          </div>
        </div>
      </div>
      {/* //? Home Navigation */}
      <div className="nav-container sticky top-0 z-10">
        <div className='nav-home bg-white'>
          <div className='contain flex items-center max-w-7xl mx-auto px-[16px] py-[16px]'>
            <div className='unordered flex justify-around flex-auto'>
              <a className='line tools' href='#tools'>Tools</a>
              <a className='line add-ons' href='#add-ons'>Add-ons</a>
              <a className='line setup' href='#setup'>Code-Setup</a>
              <a className='line development' href='#development'>Development</a>
              <a className='line version' href='#version'>Version</a>
            </div>
          </div>
        </div>
      </div>
      {/* //? Navigation <sections> */}
      <div className='content'>
        {/* // TODO : Replace Skeleton With It's Own Image Source */}
        <section className='flex flex-col' id='tools'>
          <div className='flex flex-col container pt-24 mb-16'>
            <div className=''>
              <div className='inside-tools mb-16 font-extrabold max-w-2xl text-[64px] leading-[68px] p-2'>
                The tools used to make this Website
              </div>
              <div className="flex justify-evenly flex-col !p-5 mb-16">
                <div className="flex">
                  <div className="icon-vscode w-12 h-12 border-2 border-[#42526d] rounded-full -mt-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" className='p-[5px] -ml-[3px] -mt-px'>
                        <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"/>
                        <path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"/>
                        <path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"/>
                    </svg>
                  </div>
                  <div className="desc text-2xl font-semibold w-1/2 text-[#8193b2]">
                    One of the best code editor for the web-developer, which is free as well as open source and lightweight.
                  </div>
                </div>
                <a href="https://code.visualstudio.com/" target='_blank' rel='noreferrer' className='link-mktg link-emphasis-mktg w-[119px] text-base font-semibold p-1 ml-14 hover:text-white'>
                  Get it for PC
                  <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"/>
                    <path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
                <div className="vs-img mt-4">
                  <Skeleton variant='rectangle' data-aos='zoom-in' data-aos-mirror='true' animation={false} height={400} className='vs-code !bg-[#505050e5] rounded-xl'/>
                </div>
              </div>
              <div className="flex flex-row-reverse justify-around">
                <div className="flex flex-col p-3" data-aos='fade-right'>
                  <div className='text-5xl leading-[52px] font-extrabold'>
                    Creating interactive UI using JS Library.
                  </div>
                  <div className="desc-mktg mt-4 text-2xl font-semibold text-[#8193b2]">
                    A free and open-source front-end JavaScript library for building user interfaces based on UI components. Design simple views for each state in your application, and 
                    <a href="https://reactjs.org/" rel='noreferrer' target='_blank' className='underline hover:underline hover:text-[#8193b2]'> React </a>
                    will efficiently update and render just the right components when your data changes.
                  </div>
                </div>
                <div className="rct-img p-3">
                  <Skeleton variant='rectangle' animation={false} width={400} height={400} className='react !bg-[#505050e5] rounded-xl'/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex flex-col' id='add-ons'>
          <div className="flex flex-col container pt-24">
            <div className="inside-addons text-[64px] leading-[68px] font-extrabold p-2">
              The Extensions Used
            </div>
            <div className="flex justify-evenly flex-col !p-5 mb-16">
              <div className="flex mb-4">
                <div className="desc text-2xl font-semibold w-1/2 text-[#2d3543c9]">
                VS Code includes thousands of extensions that are extremely useful for increasing productivity.
                  <span className='text-black'> Here are some extensions which were really helpful through out this project.</span>
                </div>
              </div>
              <ol>
                <li className="flex list-none justify-between items-center mb-5">
                  <h3 data-aos='fade-right' className='inside-addons text-4xl leading-[52px] font-extrabold w-7/12'>ES7 + React/Redux/React-native snippets</h3>
                  <Skeleton variant='rectangle' data-aos='fade-left' data-aos-offset='270' animation={false} width={350} height={350} className='react !bg-[#505050e5 rounded-xl'/>
                </li>
                <li className="flex list-none flex-row-reverse justify-between items-center mt-5 mb-5">
                  <h3 data-aos='fade-left' className='inside-addons text-4xl leading-[52px] font-extrabold'>ESLint</h3>
                  <Skeleton variant='rectangle' data-aos='fade-right' data-aos-offset='290' animation={false} width={350} height={350} className='react !bg-[#505050e5 rounded-xl'/>
                </li>
                <li className="flex list-none justify-between items-center mt-5 mb-5">
                  <h3 data-aos='fade-right' className='inside-addons text-4xl leading-[52px] font-extrabold'>Tailwind CSS Intellisense</h3>
                  <Skeleton variant='rectangle' data-aos='fade-left' data-aos-offset='290' animation={false} width={350} height={350} className='react !bg-[#505050e5 rounded-xl'/>
                </li>
                <li className="flex list-none flex-row-reverse justify-between items-center mt-5 mb-5">
                  <h3 data-aos='fade-left' className='inside-addons text-4xl leading-[52px] font-extrabold'>Auto Rename Tag</h3>
                  <Skeleton variant='rectangle' data-aos='fade-right' data-aos-offset='290' animation={false} width={350} height={350} className='react !bg-[#505050e5 rounded-xl'/>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className='flex h-[100vh]' id='setup'>
          <div className="flex container pt-24 justify-center">
            <div className=" text-[64px] leading-[68px] p-2 max-w-[31rem] font-extrabold">
              <span className='inside-setup'> Code setup </span>
              of my project
            </div>
          </div>
        </section>
        <section className='flex h-[100vh]' id='development'>
        <div className="flex container pt-24 justify-center">
          <div className="text-[64px] leading-[68px] text-black font-extrabold max-w-xl p-2">
            <span className='inside-dev'> Development </span>
            Of This Project
          </div>
        </div>
        </section>
        <section className='flex flex-col h-[100vh]' id='version'>
          <div className="flex flex-col container pt-24">
            <div className="text-[64px] leading-[68px] max-w-2xl font-extrabold p-2">
              The Software Used for
              <span className='inside-version'> version control </span>
            </div>
          </div>
        </section>
      </div>
      <div className="ending flex justify-center items-center">
        
      </div>
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link className="flex title-font font-medium items-center md:justify-start justify-center text-white" to='/newsindk'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">NewsWind</span>
          </Link>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2022 NewsWind 
            <span>~by Siddharth</span>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-400" href='/'>
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400" href='/'>
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400" href='/'>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400" href='/'>
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default StartPage