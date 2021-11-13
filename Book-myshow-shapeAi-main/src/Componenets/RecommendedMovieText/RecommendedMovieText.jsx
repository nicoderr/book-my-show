import React from 'react'

export default function RecommendedMovieText(props) {
    return (
        <div>
            <h1 className={` sm:text-xs  font-bold lg:text-xl ${props.isDark?"text-white":"text-gray-800"}`}>{props.title}</h1>
            <p className={`font-bold text-sm ${props.isDark?"text-white":"text-gray-800"}`}>{props.subtitle}</p>
        </div>
    )
}
