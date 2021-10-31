import React from "react";
import Menu from "../../Layouts/Menu/Menu";
import "./Hulu.css";
import Movie from "../../Layouts/Movie/Movie";
import FlipMove from "react-flip-move"

export default function Hulu({movies}){
    
    return <React.Fragment>
        <Menu/>
        <div className="movies">
            <FlipMove>
                {movies? movies.map(e=><Movie 
                    key={e.id} 
                    info={e}/>):
                null}
            </FlipMove>
        </div>
    </React.Fragment>
}
