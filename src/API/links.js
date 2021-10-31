import { apiKey,url } from "./apiParams"
export const urls={
    genres:url+"genre/movie/list?api_key="+apiKey,
    topRated:url+"movie/top_rated?api_key="+apiKey,
    default: url+"search/movie?api_key="+apiKey+"&language=en-US&query="
}