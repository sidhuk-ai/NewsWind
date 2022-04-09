import React from 'react';
import { Skeleton } from '@mui/material';

const Loading = (props) => {
    let {mode} = props;
    return (
        <>
            <div className="row my-3 ms-0 me-0">
                <div className="col-md-4 mb-4">
                    <div className="card container" aria-hidden="true" style={{backgroundColor: mode==="light"?"white":"rgb(97 92 92)"}}>
                        {/* <svg className="bd-placeholder-img card-img-top m-[10px]" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg> */}
                        <Skeleton variant="rectangular" className='mt-1' width={347.1} height={180} animation='wave'/>
                        <div className="card-body text-center">
                            <h5 className="card-title placeholder-glow">
                                {/* <span className="placeholder col-6"></span> */}
                                <Skeleton animation="wave" />
                            </h5>
                            <p className="card-text placeholder-glow">
                                {/* <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span> */}
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                            </p>
                            <div className='flex items-center'>
                                <a href="/" tabIndex="-1" className="btn btn-primary disabled placeholder col-6 container !mt-4 w-4/6">{}</a>
                                <Skeleton variant="circular" animation='wave' width={40} height={40} className='!mt-[15px] ml-1'/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 mb-4">
                    <div className="card container" aria-hidden="true" style={{backgroundColor: mode==="light"?"white":"rgb(97 92 92)"}}>
                        {/* <svg className="bd-placeholder-img card-img-top m-[10px]" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg> */}
                        <Skeleton
                         variant="rectangular" 
                         className='mt-1' 
                         width={347.1} 
                         height={180} 
                         animation='wave'
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title placeholder-glow">
                                {/* <span className="placeholder col-6"></span> */}
                                <Skeleton animation="wave" />
                            </h5>
                            <p className="card-text placeholder-glow">
                                {/* <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span> */}
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                            </p>
                            <div className='flex items-center'>
                                <a href="/" tabIndex="-1" className="btn btn-primary disabled placeholder col-6 container !mt-4 w-4/6">{}</a>
                                <Skeleton variant="circular" animation='wave' width={40} height={40} className='!mt-[15px] ml-1'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card container" aria-hidden="true" style={{backgroundColor: mode==="light"?"white":"rgb(97 92 92)"}}>
                        {/* <svg className="bd-placeholder-img card-img-top m-[10px]" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg> */}
                        <Skeleton variant="rectangular" className='mt-1' width={347.1} height={180} animation='wave'/>
                        <div className="card-body text-center">
                            <h5 className="card-title placeholder-glow">
                                {/* <span className="placeholder col-6"></span> */}
                                <Skeleton animation="wave" />
                            </h5>
                            <p className="card-text placeholder-glow">
                                {/* <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span> */}
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                            </p>
                            <div className='flex items-center'>
                                <a href="/" tabIndex="-1" className="btn btn-primary disabled placeholder col-6 container !mt-4 w-4/6">{}</a>
                                <Skeleton variant="circular" animation='wave' width={40} height={40} className='!mt-[15px] ml-1'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center m-3">
                <div className="spinner-border" role="status" style={{color: props.mode==='dark'?'white':'black'}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Loading
