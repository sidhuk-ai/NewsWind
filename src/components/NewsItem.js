import React,{useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CopyToClipboard from 'react-copy-to-clipboard';
import ShareIcon from '@mui/icons-material/Share';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import  Tooltip  from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom'

function NewsItem(props) {
    let { title, description, imageurl, newsUrl, author, date } = props;
    const [open, setOpen] = useState(false);
    const [tooltip, setTooltip] = useState('Copy to clipboard')
    const isCopied = () => {
        setOpen(true)
        setTooltip('Copied to clipboard')

    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }else{
          setOpen(false);
        }
    };
    return (
        <>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{horizontal:'center',vertical:'bottom'}}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Link of News Copied to Clipboard
                </Alert>
            </Snackbar>
            <div className="card container" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                <img src={imageurl ? imageurl : 'https://static.vecteezy.com/system/resources/previews/000/228/657/original/top-headlines-news-themem-background-vector.jpg'} className="card-img-top mt-3" alt='' width="305" height="172" loading='lazy'/>
                <div className="card-body">
                    <h4 className="card-title font-bold select-none" style={{}}>{title}</h4>
                    <p className="card-text text-ellipsis" style={{}}>{description}</p>
                    <hr className='m-3' style={{}}/>
                    <p className="card-text"><small style={{}}><i className="bi bi-person-fill"></i> {author ? author : "Unknown"} <br /><i className="bi bi-clock-fill"></i> {new Date(date).toGMTString()}</small></p>
                    <div className='flex items-center'>
                        <a href={newsUrl} id='url' target="_blank" rel="noreferrer" className="btn btn-sm btn-primary container mt-[15px]">Read More<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 mb-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg></a>
                        <Checkbox className='ml-1 !mt-[15px]' color='error' icon={<FavoriteBorder className='heart-icon' sx={{fontSize: 25}}/>} checkedIcon={<Favorite sx={{fontSize: 25}} />} />
                        <Tooltip title={tooltip} TransitionComponent={Zoom} arrow>
                            <ShareIcon className='ml-1 !mt-[15px]' sx={{fontSize: 25}} onClick={isCopied}>
                                <CopyToClipboard text={newsUrl}/>
                            </ShareIcon>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    );

}

export default NewsItem
