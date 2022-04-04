import axios from "../../axios";
import React, { useState, useEffect } from "react";
import "../Row/Rows.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseurl = "https://image.tmdb.org/t/p/original";
function Rows({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* container -> posters */}
      <div className="row__posters">
        {movies.map((movie) => {
          return (
          
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseurl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
             
              
          );
        })}
      </div>
      {trailerURL && <Youtube videoId={trailerURL} opts={opts} />}
    </div>
  );
}

export default Rows;
