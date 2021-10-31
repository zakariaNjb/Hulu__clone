import React, { forwardRef } from "react";
import {urlImg} from "../../API/apiParams";
import {AiFillLike} from "react-icons/ai";

const Movie=forwardRef(({info},ref)=>{
    return <React.Fragment>
        {info.backdrop_path!=undefined || info.poster_path!=undefined ?
        <article ref={ref} className="movie">
            {info.backdrop_path!=null?
                <img src={urlImg+info.backdrop_path} alt="logo"/>:
                <img src={urlImg+info.poster_path} alt="logo"/>
            }
            <p>{info.overview.substring(0,55) + "..."}</p>
            <h4 style={{padding:"5px 0px"}}>{info.title}</h4>
            <div className="list extra__info">
                <span>{info.release_date}</span>
                <span><AiFillLike/></span>
                <span>{info.vote_count}</span>
            </div>
        </article>:null}
    </React.Fragment>
})
export default Movie;