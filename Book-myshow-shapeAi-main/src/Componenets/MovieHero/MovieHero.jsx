import React, { useState, useContext } from "react";
import { MovieContext } from "../../Context/Movie.context";
import PaymentModal from "../PaymentModal/Payment";
import MovieInfo from "./MovieInfo";

export default function MovieHero() {
  const { movie } = useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const rentMovies = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(599);
  };

  return (
    <>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div>
        {/*mobile and medium devices*/}
        <div className="lg:hidden w-full ">
          <div className="p-2 px-5">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="cover poster"
              className=" rounded-md h-full w-full"
            />
          </div>
          <div className="px-5 flex flex-col gap-2">
            <h4>4k ratings</h4>
            <h4>English, Hindi, Kannada, Tamil, Telgu</h4>
            <h4>{genres}</h4>
            <h6 className="py-2 md:hidden" style={{ fontSize: "0.7rem" }}>
              {movie.overview}
            </h6>
            <h6 className="md:block sm:hidden ">{movie.overview}</h6>
          </div>
          <div className="flex flex-row gap-2 p-3">
            <button
              onClick={rentMovies}
              className="p-1 bg-red-500 text-white text-center font-bold w-full rounded-md"
            >
              Rent ₹129
            </button>
            <button
              onClick={buyMovie}
              className="bg-red-500 text-white text-center font-bold w-full rounded-md"
            >
              Buy ₹599
            </button>
          </div>
        </div>
        {/* Large devices*/}

        {/* Large Screen Devices */}
        <div className="hidden lg:block relative ">
          <div
            className="relative hidden w-full lg:block"
            style={{ height: "30rem" }}
          >
            <div
              className="absolute z-10 w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
              }}
            ></div>

            <div className="absolute z-30 left-24  top-10 flex items-center gap-10">
              <div className="h-96 w-80">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="Movie Poster"
                  className="w-full h-full rounded-xl"
                />
              </div>
              <MovieInfo movie={movie} />
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="backdrop poster"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
