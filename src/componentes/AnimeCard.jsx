import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    <>
      <img src={anime.images?.jpg?.image_url}></img>
    </>
  );
};

export default AnimeCard;
