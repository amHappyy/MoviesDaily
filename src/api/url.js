const url = {
  popular: "/movie/popular",
  toprated: "/movie/top_rated",
  upcoming: "/movie/upcoming"
}

const ROOT_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/"
const API_KEY = "1abb3e68d878be1155d781ce812f80a8";

const defaultQuery = {
  api_key: API_KEY,
  language: "en-US",
  // region: "ID",
};
  
const queryString = (obj) => {
  return Object.entries(obj)
    .map(([index, val]) => `${index}=${val}`)
    .join("&");
};

export const getPopularMoviesUrl = () => `${ROOT_URL}${url.popular}?${queryString(defaultQuery)}`

export const getTopRatedMoviesUrl = () => `${ROOT_URL}${url.toprated}?${queryString(defaultQuery)}`

export const getUpcomingMoviesUrl = () => `${ROOT_URL}${url.upcoming}?${queryString(defaultQuery)}`

export const getImageUrl = (path, key = "uri", width = "w500") => {
  return { [key]: `${IMAGE_URL}${width}/${path}` };
};