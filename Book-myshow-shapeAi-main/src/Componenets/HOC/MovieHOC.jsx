import React from "react";
import { Route } from "react-router-dom";
import MovieLayout from "../layouts/MovieLayout";

function MovieHOC({component: Component, ...rest}) {
  return (
    <>
      <Route
        {...rest}
        component={()=>(
          <MovieLayout>
            <Component />
          </MovieLayout>
        )}
      ></Route>
    </>
  );
}

export default MovieHOC;
