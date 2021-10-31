import React, { useContext, useEffect } from "react";
import { moveLeft,moveRight } from "./metier";
import Button from "../../Components/Button";
import {arr} from  "./MenuOptions";
import { StateFct } from "../../Hooks/StateFct";
import {urls} from "../../API/links";
import {AiOutlineLeftCircle,AiOutlineRightCircle} from "react-icons/ai";
import { Context } from "../../App";

export default function Menu(){

   const {state,fetchApi}=StateFct();
   const {fetchMovies}=useContext(Context);

   useEffect(()=>{
    fetchApi(urls.genres);
   },[]);

    return <nav>
        <div className="hulu__menu">
        <ul className="list">
            {arr.map((e,index)=>{
                return <li key={index}>
                    <Button Icon={e.icon} text={e.text}/>
                </li>
            })}
        </ul>
        <img src="https://logo-marque.com/wp-content/uploads/2020/11/Hulu-Logo.png" alt="logo"/>
        </div>
        <div className="hulu__menu movie__genres">
            <ul className="list">
                {state.genres? state.genres.map((e)=>{
                    return <li 
                        key={e.id} 
                        className="genre"
                        onClick={()=>fetchMovies(urls.default+e.name)}
                        >{e.name}</li>
                }):null}
            </ul>
            <button id="leftBtn" onClick={moveLeft}>
                <AiOutlineLeftCircle />
            </button>
            <button id="rightBtn" onClick={moveRight}>
                <AiOutlineRightCircle/>
            </button>
        </div>
    </nav>
}