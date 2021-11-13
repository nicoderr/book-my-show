import React, { useState , useEffect} from "react";
import HeroSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';


export default function HeroCrousel() {
  const [images, setimages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
        const getImages = await axios.get("/movie/now_playing");
        setimages(getImages.data.results);
    };

    requestNowPlayingMovies();
}, []);

  const settings = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    infinite: true,
    slideToScroll: 1,
};

  return (
    <div className="sm:hidden lg:block focus:outline-gray">
      <HeroSlider {...settings}>
        {images.map((image) => (
          <div className=" w-full h-72 py-3 px-2 focus:outline-gray ">
            <img
              src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
              alt="Banner"
              className="w-full h-full rounded-md h"
            />
            
          </div>
        ))}
      </HeroSlider>
    </div>
  );
}
