import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AnimeCard from "./componentes/AnimeCard";

const App = () => {
  const [animes, setAnimes] = useState([]);
  const [term, setTerm] = useState("mazinger");

  const getAnime = async (name) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`);

    const data = await response.json();

    console.log(data.data);

    setAnimes(data.data);
  };

  useEffect(() => {
    getAnime(term);
  }, []);

  return (
    <>
      <h1>Anime search</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Search for anime e.g Naruto"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button onClick={() => getAnime(term)}>Search</button>
      </div>
      <div className="container">
        {animes.length > 0 ? (
          animes.map((anime, index) => <AnimeCard key={index} anime={anime} />)
        ) : (
          <div>
            <h1>Not found</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
