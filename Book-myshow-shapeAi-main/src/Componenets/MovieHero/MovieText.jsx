import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaAmazonPay, FaApplePay } from "react-icons/fa";
import Slider from "react-slick";
import { MovieContext } from "../../Context/Movie.context";
import Cast from "../Cast/Cast";
import { useParams } from "react-router";
import RecommendedMovies from "../HeroCrousel/RecommendedMovies";
//movie context

export default function MovieText() {
  const { movie } = useContext(MovieContext);
  const { id } = useParams();
  const [cast, setcast] = useState([]);
  const [SimilarImages, setSimilarImages] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
        const getCast = await axios.get(`/movie/${id}/credits`);
        setcast(getCast.data.cast);
    };
    requestCast();
}, [id]);

  useEffect(() => {
    const reqSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarImages(getSimilarMovies.data.results);
    };

    reqSimilarMovies();
  }, [id]);

  const SettingsCast = {
    infinite: false,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    InitialSlide: 0,
    dots: false,
    responsive: [
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="sm:w-full">
      <div className="my-12 w-full px-4 lg:ml-20 lg:w-2/3">
        <h1 className="font-bold text-2xl">About The Movie</h1>
        <p>{movie.overview}</p>
        <hr className="my-12" />

        <h1 className="font-bold text-2xl ">Applicable Offers</h1>
        <div className="flex flex-row gap-3 py-4">
          <div className="flex flex-col gap-2 w-1/2 bg-background-cream border-dashed border-2 rounded-md border-yellow-400 p-2">
            <div className="flex flex-row items-center gap-3">
              <div className="w-5 items-center">
                <FaAmazonPay className="w-full" />
              </div>
              <p>AMAZON PAY UPI CASHBACK OFFER</p>
            </div>
            <div className="mx-6">
              <p>
                Pay using Amazon Pay UPI & win cashback upto INR 250*.*T&C
                apply.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/2 bg-background-cream border-dashed border-2 rounded-md border-yellow-400 p-2">
            <div className="flex flex-row items-center gap-3">
              <div className="w-5">
                <FaApplePay className="w-full" />
              </div>
              <p>RUPAY STREAM OFFER</p>
            </div>
            <div className="mx-6">
              <p>
                Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                Stream.
              </p>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-12" />
          <h1 className="font-bold text-2xl ">Cast </h1>
          <Slider {...SettingsCast} className="py-3">
            {cast.map((castData) => (
              <Cast
                image={castData.profile_path}
                castName={castData.original_name}
                role={castData.character}
              />
            ))}
          </Slider>
          <hr className="my-12" />
          <h1 className="font-bold text-2xl ">Similar Movies </h1>
          <RecommendedMovies
                    title=""
                    subtitle=""
                    recommendedimages={SimilarImages}
                    isDark={false}/>
        </div>
      </div>
    </div>
  );
}
