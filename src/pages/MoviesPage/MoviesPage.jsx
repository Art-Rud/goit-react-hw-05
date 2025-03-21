import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from "../../request";
import MovieList from "../../components/MovieList/MovieList";
import { MagnifyingGlass } from "react-loader-spinner";
import style from "./MoviesPage.module.css";
function MoviesPage() {
  const [movies, SetMovies] = useState([]);
  const [searchParams, SetSearchParams] = useSearchParams();
  const [error, SetError] = useState(false);
  const [isLoading, SetIsLoading] = useState(false);
  const query = searchParams.get("query") ?? "";
  const ChangeSearchMovies = (event) => {
    event.preventDefault();
    console.log(event.target.elements.search.value);

    const newParams = new URLSearchParams(searchParams);
    if (event.target.elements.search.value !== "") {
      newParams.set("query", event.target.elements.search.value);
    } else {
      newParams.delete("query");
    }
    SetSearchParams(newParams);
  };

  useEffect(() => {
    async function getMovies() {
      try {
        if (!searchParams) {
          return;
        }
        SetMovies([]);
        SetError(false);
        SetIsLoading(true);
        const data = await fetchMovies(query);
        SetMovies(data);
      } catch (error) {
        SetError(true);
      } finally {
        SetIsLoading(false);
      }
    }
    getMovies();
  }, [query]);
  return (
    <>
      <form className={style.form} onSubmit={ChangeSearchMovies}>
        <input type="text" name="search" />
        <button className={style.btn} type="submit">
          Search
        </button>
      </form>
      {error && <p>Something went wrong, please reload page</p>}
      <MovieList list={movies} />{" "}
      {isLoading && (
        <MagnifyingGlass color="white" wrapperClass={style.loader} />
      )}
    </>
  );
}
export default MoviesPage;
