export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
export const TMDB_BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/original';
export const API_KEY = '8a9f6e472443b99e4c1db17d69a9fa3f';
export const POPULAR_MOVIES_URL = TMDB_BASE_URL + '/discover/movie?api_key=' + API_KEY + '&&sort_by=popularity.desc';
export const NOW_PLAYING_MOVIES_URL = TMDB_BASE_URL + '/movie/now_playing?api_key=' + API_KEY;
export const MOVIE_DETAIL_URL = TMDB_BASE_URL + '/movie/MOVIE_ID?api_key=' + API_KEY;
export const MOVIE_CAST_URL = TMDB_BASE_URL + '/movie/MOVIE_ID/credits?api_key=' + API_KEY;
export const MOVIE_SEARCH_URL = TMDB_BASE_URL + '/search/movie?api_key=' + API_KEY + '&query=QUERY';