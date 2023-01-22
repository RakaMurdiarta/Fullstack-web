import React from "react";

const Movie = (props) => {
    return (
        <div className="card" style={{ width: "100%" }}>
            <img src={props.image} className="card-img-top" alt="..."></img>
            <div className="card-body text-center">
                <h5>{props.title}</h5>
                <p className="card-text">Year : {props.year}</p>
            </div>
        </div>
    )
}

export default Movie;