import React from 'react';
import workflow from './workflow.svg';
import TextField from '@mui/material/TextField';


const SignIn = (props) => {
    return (
        <div className='d-flex align-items-center justify-content-center mt-12 flex-wrap sm:mt-40'>
            <div className="min-h-full flex items-center justify-center py-12 px-[1rem] sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-16 w-auto"
                            src={workflow}
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold" style={{color:props.mode==="dark"?"white":"rgba(17,24,39,1)"}}>Sign in to your account</h2>
                    </div>
                </div>
            </div>
            <form className='pt-[13px] pb-6 px-[20px] rounded-lg shadow-md' style={{ boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)", backgroundColor:props.mode==="dark"?"#6b6b6b":"#eff1f4"}}>
                <div className="mb-3">
                    <TextField id='outlined-basic' label='Email' variant='outlined' color={`${props.mode==='dark'?'warning':'secondary'}`} fullWidth={true} required={true}/>
                    {/* <input type="email" className="form-control" value={credentials.email} onChange={onChanges} id="exampleInputEmail1" aria-describedby="emailHelp"/> */}
                </div>
                <div className="mb-3">
                    <TextField id='outlined-password-input' type='password' label='Password' variant='outlined' color={`${props.mode==='dark'?'warning':'secondary'}`} fullWidth={true} required={true}/>
                    {/* <input type="password" className="form-control" value={credentials.password} onChange={onChanges} id="exampleInputPassword1"/> */}
                </div>
                <button type="submit" className="btn bg-blue-700 fw-bold text-white hover:bg-blue-800 block text-base w-[283px]">Submit</button>
                <span className='d-flex justify-content-center mt-2'>
                    <a href="/newsindk" className='text-xs hover:!underline'>Forgotten password?</a>
                </span>
                <hr className='mt-4 mb-4' />
                <button className="btn bg-green-600 btn-success fw-bold ml-[52px]">Create New Account</button>
            </form>
        </div>
    )
}

export default SignIn