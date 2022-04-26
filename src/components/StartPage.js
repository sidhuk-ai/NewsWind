import React from 'react'
import {Link} from 'react-router-dom'

function StartPage(props) {
  return (
    <div className='h-full'>
        <div className='mt-[90px] h-[23rem] flex justify-center items-center flex-col lg:ml-[304px] lg:mr-[304px]'>
            <h2 className='text-5xl font-medium' style={{color:props.mode==='light'?'black':'white'}}>NewsWind</h2>
            <p className='text-xl mt-4 text-center lg:w-[608px]' style={{color:props.mode === 'light'?'black':'white'}}>This Newswind Website is just an example website created using <a href="https://reactjs.org/" className='font-bold bg-[#74b9ff63] !text-current rounded underline decoration-red-400 border-b-[#7dd3fc] px-1 hover:decoration-[#7dd3fc]' target='_blank' rel='noreferrer'>Reactjs</a> as a framework. You can view different categories of news here,like science, sports, entertainment and technology.</p>
            <Link className='bg-gray-700 px-4 py-2 font-bold rounded mb-1 text-white mt-4 text-center' to='/newsindk/general'>Home</Link>
        </div>
        <footer className='mt-auto'>
            <p className='text-center font-mono' style={{color:props.mode==='light'?'#374151':'#b9b2b2'}}>Cover Template for Newswind, by Siddharth.</p>
        </footer>
    </div>
  )
}

export default StartPage