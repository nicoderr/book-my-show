import React, { useState } from "react";
import HeroSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecommendedMovieText from "../RecommendedMovieText/RecommendedMovieText";
import { Link } from "react-router-dom";

export default function RecommendedMovies(props) {
  const settings = {
    initialSlide: 4,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          initialSlide: 4,
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          initialSlide: 4,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
    ],
  };
  const { recommendedimages, title, subtitle, isDark } = props;

  return (
    <div
      className={`${
        isDark ? "bg-background-blue" : "bg-background-white"
      } sm:px-4`}
    >
      <h1
        className={`font-bold text-3xl sm:text-lg ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h1>
      <p
        className={` text-sm ${
          isDark ? "text-white" : "text-gray-800"
        } sm:text-sm`}
      >
        {subtitle}
      </p>
      <HeroSlider {...settings}>
        {recommendedimages.map((image) => (
          <Link to={`/movie/${image.id}`}>
            <div className="py-3 px-2 flex flex-col gap-5  focus:outline-none">
              <img
                src={`https://image.tmdb.org/t/p/original${image.poster_path}`}
                alt="Banner"
                className="w-full h-full rounded-md"
              />
              <RecommendedMovieText {...image} isDark={isDark} />
            </div>
          </Link>
        ))}
      </HeroSlider>
    </div>
  );
}
