import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/character.css";
const CharacterScreen = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limitNo, setLimitNo] = useState(12);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios(`https://www.breakingbadapi.com/api/characters?limit=${limitNo}`)
      .then((res) => {
        // handle success and loading state

        setCharacters(res.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error state
        console.log(error);
        setError(true);
        setLoading(false);
      });
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setLimitNo(limitNo + 10);
    });
  });
  if (loading === true) {
    return <h1 className="episode">please wait, content loading</h1>;
  }
  if (error === true) {
    return (
      <h1 className="episode">sorry, something went wrong. try refreshing</h1>
    );
  }

  return (
    <div className="character">
      {characters.map((character) => (
        <div className="characterCard" key={character.char_id}>
          <img src={character.img} alt={character.img} />
          <div className="characterCard__info bold">
            <p>name: {character.name}</p>
            <p>nickname: {character.nickname}</p>
            <p>status: {character.status}</p>
            <p>birthday: {character.birthday}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterScreen;
