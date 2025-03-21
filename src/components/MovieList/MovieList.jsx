import { Link, useLocation } from "react-router-dom";
import style from "./MovieList.module.css";
const posterUrl = "https://image.tmdb.org/t/p/w500/";
function MovieList({ list }) {
  const location = useLocation();
  return (
    <>
      <ul className={style.list}>
        {list.map((item) => (
          <Link to={`/movies/${item.id}`} key={item.id} state={location}>
            <li className={style.item} key={item.id}>
              <img
                src={`${posterUrl}${item.poster_path}`}
                alt={item.title}
                width={50}
                height={75}
                loading="lazy"
              />
              <p className={style.title}>{item.title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
export default MovieList;
