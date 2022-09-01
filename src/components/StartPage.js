import React from 'react'
import {Link} from 'react-router-dom'

function StartPage(props) {
  return (
    <div className='h-full'>
        <div className='mt-[90px] h-[23rem] flex justify-center items-center flex-col lg:ml-[304px] lg:mr-[304px]'>
          <h2 className='text-5xl font-medium' style={{color:props.mode==='light'?'black':'white'}}>NewsWind</h2>
          <p className='text-xl mt-4 text-center lg:w-[608px]' style={{color:props.mode === 'light'?'black':'white'}}>This Newswind Website is just an example website created using <a href="https://reactjs.org/" className='font-bold bg-[#74b9ff63] !text-current rounded underline decoration-red-400 border-b-[#7dd3fc] px-1 hover:decoration-[#7dd3fc]' target='_blank' rel='noreferrer'>Reactjs</a> as a framework. You can view different categories of news here,like science, sports, entertainment and technology.</p>
          <Link className='bg-gray-700 px-4 py-2 font-bold rounded mb-1 text-white mt-4 text-center' to='/general'>Home</Link>
        </div>
        <div className='mb-14 flex justify-center items-center flex-col'>
          <p className='font-mono text-xl'>The source code of this website 
            <a href="https://github.com/sidhuk-ai/newsindk" className='font-bold bg-[#74b9ff63] !text-current rounded underline decoration-red-400 border-b-[#7dd3fc] px-1 hover:decoration-[#7dd3fc]' target='_blank' rel='noreferrer'>
              Github
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 mb-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </p>
        </div>
        <footer className='mt-auto'>
            <p className='text-center font-mono' style={{color:props.mode==='light'?'#374151':'#b9b2b2'}}>Cover Template for Newswind, by Siddharth.</p>
        </footer>
    </div>
  )
}

export default StartPage