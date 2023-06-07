import axios from 'axios';

const apiKey = '42200b80456bf8bbad5e7a8d4195c4b9';
const baseUrl = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
    language: 'en-US',
  },
});

const queries = {
  getTrending: '/trending/all/day',
  getMovieDetails: '/movie/',
  getMovieCast: '/credits',
  getMovieReviews: '/reviews',
  getMovieSearch: '/search/movie',
};

export async function getTrending() {
  try {
    const { data } = await instance.get(queries.getTrending);
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovies(name) {
  try {
    const { data } = await instance.get(queries.getMovieSearch, {
      params: {
        query: name,
      },
    });
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieDetails(movieId) {
  try {
    const { data } = await instance.get(queries.getMovieDetails + movieId);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieCast(movieId) {
  try {
    const { data } = await instance.get(
      queries.getMovieDetails + movieId + queries.getMovieCast
    );
    return data.cast;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieReviews(movieId) {
  try {
    const { data } = await instance.get(
      queries.getMovieDetails + movieId + queries.getMovieReviews
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieSearch(query) {
  try {
    const { data } = await instance.get(queries.getMovieSearch, {
      params: {
        query: query,
      },
    });
    return data.results;
  } catch (error) {
    console.log(error);
  }
}
