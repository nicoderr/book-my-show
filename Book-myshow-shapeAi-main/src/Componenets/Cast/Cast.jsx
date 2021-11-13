import React from "react";

export default function Cast(props) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
            <img src={`https://image.tmdb.org/t/p/original${props.image}`}
            alt="Cast" className='w-full h-full rounded-full' />
        </div>
        <h1 className="text-xl">{props.castName}</h1>
        <h5 className="text-sm text-gray-700">as {props.role}</h5>
      </div>
    </div>
  );
}
