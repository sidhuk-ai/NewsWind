import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

function NewsComponent(props) {
    const [open, setOpen] = useState(false);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
        setOpen(true)
    };
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsWind`;
        updateNews();
        // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }else{
          setOpen(false);
        }
    };

    return (
        <>
            <h1 className="text-center font-bold text-3xl select-none" style={{ margin: '100px 0px 35px' ,color: props.mode==="dark"?"white":"black"}}>NewsWind - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Loading mode={props.mode}/>}
            <InfiniteScroll
                dataLength={articles?.length}
                next={fetchMoreData}
                hasMore={articles?.length !== totalResults}
                loader={<Loading mode={props.mode}/>}
            >
                <div className="container">
                    <div className="row">
                        {articles?.map((element,key) => {
                            return <div className="col-md-4 mb-3" key={key}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} mode={props.mode} />
                            </div>
                        })}
                    </div>
                </div>
                <Snackbar open={open} autoHideDuration={7000} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{horizontal:'center',vertical:'bottom'}}>
                    <Alert severity="error">
                        <AlertTitle className='font-semibold'>Error</AlertTitle>
                        There was an error while fetching the news — <strong>Sorry for the Inconvenience</strong>
                    </Alert>
                </Snackbar>
            </InfiniteScroll>
        </>
    );

}
NewsComponent.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

NewsComponent.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default NewsComponent