import React from "react";
import '../css/Card.css';


function Card(props){
    
    const {movie} = props;
    
    return(
        <div className="card"> 
            <img src={movie.Poster} alt={movie.Title}/>
            <div className="container">
                <h5>{movie.Title}</h5>
                <span>Year:{movie.Year}</span>
            </div>
        </div>
    );
}
export default Card;
