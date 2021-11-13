import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieNavbar from "../Navbar/MovieNavbar";
import { MovieContext } from "../../Context/Movie.context";

export default function MovieLayout(props) {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  useEffect(() => {
      const requestMovie = async () => {
          const getMovieData = await axios.get(`/movie/${id}`);
          setMovie(getMovieData.data);
      };
      requestMovie();
  }, [id]);

  return (
    <>
      <div className="bg-white">
        <MovieNavbar />
        {props.children}
      </div>
    </>
  );
}
