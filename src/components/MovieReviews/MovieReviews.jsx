import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviews } from "../../request";
function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, SetReviews] = useState([]);
  useEffect(() => {
    async function getReviews() {
      try {
        const data = await fetchReviews(movieId);
        SetReviews(data);
      } catch (error) {}
    }
    getReviews();
  }, [movieId]);
  return (
    <>
      {reviews && (
        <ul>
          {reviews.map((review) => (
            <li>
              <h4>Author : {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default MovieReviews;
