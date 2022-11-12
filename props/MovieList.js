import React from "react";

function MovieList(props) {
  const { varun } = props;
  return (
    <div>
      <h1>{varun.movieName}</h1> <p> {varun.desp} </p>{" "}
    </div>
  );
}

export default MovieList;
