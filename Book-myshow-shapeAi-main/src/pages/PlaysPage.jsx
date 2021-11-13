import React from "react";
import PlayFilter from "../Componenets/PlayFilters/PlayFilter";
import Poster from "../Poster/Poster";



const Plays = () => {
    return (
        <>
            <div className=" mx-auto px-4 my-10">
                <div className="w-full lg:flex lg:flex-row-reverse gap-4">
                    <div className="lg:w-3/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">
                            Play in NCR Delhi
                        </h2>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg"
                                    title="Qaidi"
                                    subtitle="Akshara Theatra: Delhi"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlayFilter
                                title="Date"
                                tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                        </div>
                        <div>
                            <PlayFilter
                                title="Language"
                                tags={["English", "Hindi", "Tamil"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plays;