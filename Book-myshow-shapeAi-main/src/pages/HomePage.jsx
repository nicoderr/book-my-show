import axios from "axios";
import React, { useState, useEffect } from "react";
import EntertainmentCardSlider from "../Componenets/HeroCrousel/EntertainmentCard";
import HeroCrousel from "../Componenets/HeroCrousel/HeroCrousel";
import RecommendedMovies from "../Componenets/HeroCrousel/RecommendedMovies";

function HomePage() {
  const [recommendedImages, setrecommendedImages] = useState([]);

  const [premiereImages, setpremiereImages] = useState([]);

  const [toprated, settoprated] = useState([]);

  useEffect(() => {
    const reqRecommended = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setrecommendedImages(getPopularMovies.data.results);
    };
    reqRecommended();
  }, []);

  useEffect(() => {
    const reqPlaying = async () => {
      const getPlaying = await axios.get("/movie/upcoming");
      setpremiereImages(getPlaying.data.results);
      console.log(getPlaying.data.results);
    };
    reqPlaying();
  }, []);

  useEffect(() => {
    const reqtoprated = async () => {
      const getPlaying = await axios.get("/movie/top_rated");
      settoprated(getPlaying.data.results);
    };
    reqtoprated();
  }, []);


  return (
    <>
      <div className="bg-background-white">
        <HeroCrousel />

        <div className="md:px-6">
          <RecommendedMovies
            title="Recommended Movies"
            subtitle="List of recommended movies"
            recommendedimages={recommendedImages}
            isDark={false}
          />
        </div>

        <EntertainmentCardSlider />

        <div className="bg-background-blue my-12 ">
          <div className="md:px-6">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
            </div>
            <div className="pb-4 pt-2">
              <RecommendedMovies
                title="PREMEIRE"
                subtitle="Brand new releases every Friday"
                recommendedimages={premiereImages}
                isDark={true}
              />
            </div>
          </div>
        </div>
        <div className="md:px-6">
          <RecommendedMovies
            title="Top Rated Movies"
            subtitle=""
            recommendedimages={toprated}
            isDark={false}
          />
        </div>
      </div>
    </>
  );
}
export default HomePage;
