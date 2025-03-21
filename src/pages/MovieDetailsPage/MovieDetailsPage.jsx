import { Suspense, useEffect, useRef, useState } from "react";
import { fetchById } from "../../request";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import style from "./MovieDetailsPage.module.css";
import { MagnifyingGlass } from "react-loader-spinner";
const posterUrl = "https://image.tmdb.org/t/p/w500/";
function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, SetMovie] = useState(null);
  const [error, SetError] = useState(false);
  const [isLoading, SetIsLoading] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  useEffect(() => {
    async function getMovies() {
      try {
        SetError(false);
        SetIsLoading(true);
        SetMovie(null);
        const data = await fetchById(movieId);
        SetMovie(data);
        console.log(data);
      } catch (error) {
        SetError(true);
      } finally {
        SetIsLoading(false);
      }
    }
    getMovies();
  }, [movieId, SetMovie]);
  return (
    <>
      {isLoading && (
        <MagnifyingGlass color="white" wrapperClass={style.loader} />
      )}
      {error && <p>Something went wrong, please reload page</p>}
      {movie && (
        <div className={style.wrap}>
          <Link to={backLinkRef.current} className={style.back}>
            Go back
          </Link>
          <div className={style.movie}>
            <img
              src={`${posterUrl}${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              loading="lazy"
            />
            <div className={style.info}>
              <h2>{movie.title}</h2>
              <p>Users score : {`${Math.round(movie.vote_average * 10)}%`}</p>
              <h3>Overview : </h3>
              <p>{movie.overview}</p>
              <h3>Genres :</h3>
              <div className={style.genres}>
                {movie.genres.map((genre) => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
            <div>
              <Suspense
                fallback={
                  <MagnifyingGlass color="white" wrapperClass={style.loader} />
                }
              >
                <Outlet />
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default MovieDetailsPage;
