import React, { useEffect, useState } from "react";
import axios from "./axios";
import './Row.css';

import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow}) {

  const [movies, setMovies] = useState([]);
  const [urlTrailer, setUrlTrailer] = useState("")

  // similar to componentDidMount life cycle
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]); // execute only fetch url changed


  const handleClick = (movie) => {
    if (urlTrailer) {

      setUrlTrailer("")

    } else {

      movieTrailer(movie?.name || "")
        .then(url => {

          const urlParams = new URLSearchParams(new URL(url).search);
          setUrlTrailer(urlParams.get('v'))

        }).catch(err => console.log(err))
    }
  }


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {
            movies.map((movie) => {
                return (
                    <img
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        onClick={() => handleClick(movie)}
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
                        alt={movie.name}
                    />
                );
            })}
      </div>
      {urlTrailer && <YouTube videoId={urlTrailer} opts={opts} />}
    </div>
  );
}

export default Row;
