import axios from "axios";

export const fetchMovies = async (text) => {
  const url =
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWU3ZDAwYzNkMzMwM2ExZjQ3M2MzNDZjYTMzMjU4MSIsIm5iZiI6MTc0MjEyNTMzNy41NDMsInN1YiI6IjY3ZDZiOTE5ODVkMTM5MjFiNTAxMTI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.keSjGLSWyuMuV2yqIV3ZJiHD-6UuPmxFdbDF1EaX6PI",
    },
    params: { query: text },
  };
  const response = await axios.get(url, options);
  console.log(response);

  return response.data.results;
};
export const fetchPopular = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWU3ZDAwYzNkMzMwM2ExZjQ3M2MzNDZjYTMzMjU4MSIsIm5iZiI6MTc0MjEyNTMzNy41NDMsInN1YiI6IjY3ZDZiOTE5ODVkMTM5MjFiNTAxMTI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.keSjGLSWyuMuV2yqIV3ZJiHD-6UuPmxFdbDF1EaX6PI",
    },
  };
  const response = await axios.get(url, options);
  console.log(response);

  return response.data.results;
};
export const fetchById = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWU3ZDAwYzNkMzMwM2ExZjQ3M2MzNDZjYTMzMjU4MSIsIm5iZiI6MTc0MjEyNTMzNy41NDMsInN1YiI6IjY3ZDZiOTE5ODVkMTM5MjFiNTAxMTI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.keSjGLSWyuMuV2yqIV3ZJiHD-6UuPmxFdbDF1EaX6PI",
    },
  };
  const response = await axios.get(url, options);
  console.log(response);

  return response.data;
};
export const fetchCast = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWU3ZDAwYzNkMzMwM2ExZjQ3M2MzNDZjYTMzMjU4MSIsIm5iZiI6MTc0MjEyNTMzNy41NDMsInN1YiI6IjY3ZDZiOTE5ODVkMTM5MjFiNTAxMTI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.keSjGLSWyuMuV2yqIV3ZJiHD-6UuPmxFdbDF1EaX6PI",
    },
  };
  const response = await axios.get(url, options);
  console.log(response);

  return response.data.cast;
};
export const fetchReviews = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWU3ZDAwYzNkMzMwM2ExZjQ3M2MzNDZjYTMzMjU4MSIsIm5iZiI6MTc0MjEyNTMzNy41NDMsInN1YiI6IjY3ZDZiOTE5ODVkMTM5MjFiNTAxMTI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.keSjGLSWyuMuV2yqIV3ZJiHD-6UuPmxFdbDF1EaX6PI",
    },
  };
  const response = await axios.get(url, options);
  console.log(response);

  return response.data.results;
};
