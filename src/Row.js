import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from "./axios";

function Row({title,fetchUrl,isLargeRow=false}) {
    const[movies,setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData(){
            axios.get(fetchUrl)
                 .then((response) => {
                     let movieResults = response.data.results;
                     setMovies(movieResults);
                 })
        } 
        fetchData();
    }, []);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie)=>{
                    if(movie.poster_path)
                    return (
                        <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            key={movie.id}
                            loading="lazy"
                            target="_blank"
                            src={`${base_url}${''}${movie?.poster_path}`}
                            onClick={()=>{
                                if(!isLargeRow){
                                    if(movie?.name){
                                        window.open(`https://www.youtube.com/results?search_query=${movie?.name}`, '_blank')
                                    }else if(movie?.title){
                                        window.open(`https://www.youtube.com/results?search_query=${movie?.title}`, '_blank')
                                    }else{
                                        window.open(`https://www.youtube.com/results?search_query=${movie?.original_name}`, '_blank')
                                    }
                                }
                            }}
                        />
                    )}
                )}
            </div>
        </div>
    )
}

export default Row
