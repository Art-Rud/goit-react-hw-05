import { useParams } from "react-router-dom";
import { fetchCast } from "../../request";
import { useEffect, useState } from "react";
import style from "./MovieCast.module.css";
const posterUrl = "https://image.tmdb.org/t/p/w500/";
function MovieCast() {
  const { movieId } = useParams();
  const [cast, SetCast] = useState([]);
  useEffect(() => {
    async function getCast() {
      try {
        const data = await fetchCast(movieId);
        SetCast(data);
      } catch (error) {}
    }
    getCast();
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={`${posterUrl}${actor.profile_path}`}
                width={50}
                height={75}
                loading="lazy"
              />
              <h4>{actor.name}</h4>
              {actor.character ? (
                <p>Character : {actor.character}</p>
              ) : (
                <p>Character : not specified</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default MovieCast;
