import React, { useState,useEffect } from 'react';
import "./Banner.css";
import axios from "./axios";
import requests from './Requests';

function Banner() {

    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            axios.get(requests.fetchNetflixOriginals)
                 .then((response) => {
                     let movieObj = response.data.results[
                         Math.floor(Math.random()* response.data.results.length-1)
                     ]
                     setMovie(movieObj);
                 })
        }
        fetchData();
    }, [])

    const truncate = (textString, maxCharacters) => {
        let returnedValue = '';
        returnedValue = (textString?.length > maxCharacters) ? (textString.substr(0,maxCharacters-1)+"...") : textString;
        return returnedValue;
    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button" onClick={()=>{
                                    if(movie?.name){
                                        window.open(`https://www.youtube.com/results?search_query=${movie?.name}`, '_blank')
                                    }else if(movie?.title){
                                        window.open(`https://www.youtube.com/results?search_query=${movie?.title}`, '_blank')
                                    }else{
                                        window.open(`https://www.youtube.com/results?search_query=${movie?.original_name}`, '_blank')
                                    }
                            }}>Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview,250)}
                </h1>
            </div>
            <div className="banner__fadeBottom"></div>
        </header>
    )
}

export default Banner
