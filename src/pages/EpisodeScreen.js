import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/episode.css";

const EpisodeScreen = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios(`https://www.breakingbadapi.com/api/episodes`)
      .then((res) => {
        // handle success and loading state

        setEpisodes(res.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error state
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, [episodes]);
  if (loading === true) {
    return <h1 className="episode">please wait, content loading</h1>;
  }
  if (error === true) {
    return (
      <h1 className="episode">sorry, something went wrong. try refreshing</h1>
    );
  }

  return (
    <div className="episode">
      {episodes.map((episode) => (
        <div className="episodeCard">
          <div className="episodeCard__header">
            <h1>Title: {episode.title}</h1>
          </div>
          <div className="season">
            <h1>Season {episode.season}</h1>
            <h1>Episode {episode.episode}</h1>
          </div>
          <div className="actors">
            <h1 className="bold">Actors:</h1>
            {episode.characters.map((cName) => (
              <h1>{cName}</h1>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodeScreen;
