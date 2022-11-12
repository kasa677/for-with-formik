import React from "react";
import MovieList from "./MovieList";
import { movielistdata } from "./movielistdata";

function Main() {
  return (
    <div className="container py-5">
      <h1>Top 5 Movie List</h1>
      {movielistdata.map((item, index, ent) => {
        return <MovieList varun={item} />;
      })}
      {/* <MovieList
        title="KGF"
        desp="Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he gets involved with the notorious gold mafia."
      />
      <MovieList
        title="Gandhi"
        desp="A lawyer, Mohandas Gandhi, returns to British India from South Africa. He begins a nationwide campaign of non-violent resistance against the British rule, pressuring Britain to liberate India."
      />

      <MovieList title="Rockstar" desp="Just a movie name" /> */}
    </div>
  );
}

export default Main;
