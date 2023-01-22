import React, { useState, useEffect } from 'react';
import Movie from './Movie';

function ListMovie() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        fetch('https://www.omdbapi.com/?apikey=f9c23637&type=movie&s=avengers')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setMovies(data.Search)
            })
    }, [])

    return (

        <div>
            {
                loading ? <h1>Loading Time....</h1> : <div className="row mt-2">
                    {
                        movies.map(({ Poster, Title, Year, imdbID }) => (
                            <div className=" col-sm-12  col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mb-4" key={imdbID}>
                                <Movie className="text-center" image={Poster} title={Title} year={Year} />
                            </div>
                        ))
                    }
                </div>
            }

        </div>

        // <ul>
        //     {loading?<h1>Loading...</h1>:movies.map((item,index)=>{
        //         return <li key={index}>{item.Title}</li>
        //     })}

        //     {/* {movies.map((item,index)=>{
        //         return <li key={index}>{item.Title}</li>
        //     })} */}
        // </ul>
    );
}

export default ListMovie;
// http://www.omdbapi.com/?apikey=f9c23637&type=movie&s=transformers

// https://63b0de55f9a53fa2026fc1f4.mockapi.io/api/v1/results