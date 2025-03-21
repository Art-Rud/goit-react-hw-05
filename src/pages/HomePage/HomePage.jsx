import { useEffect, useState } from "react";
import { fetchPopular } from "../../request";
import MovieList from "../../components/MovieList/MovieList";
import { MagnifyingGlass } from "react-loader-spinner";
import style from "./HomePage.module.css";
function HomePage() {
  const [list, SetList] = useState([]);
  const [error, SetError] = useState(false);
  const [isLoading, SetIsLoading] = useState(false);
  useEffect(() => {
    async function getMovies() {
      try {
        SetError(false);
        SetIsLoading(true);
        const data = await fetchPopular();
        SetList(data);
      } catch (error) {
        SetError(true);
      } finally {
        SetIsLoading(false);
      }
    }
    getMovies();
  }, []);
  return (
    <>
      {isLoading && (
        <MagnifyingGlass color="white" wrapperClass={style.loader} />
      )}
      {error && <p>Something went wrong, please reload page</p>}

      <MovieList list={list} />
    </>
  );
}
export default HomePage;
