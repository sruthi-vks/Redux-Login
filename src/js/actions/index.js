import { ADD_ARTICLE } from "../constants/action-types";
import { ADD_MOVIE } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
  };

export function addMovies(movieName){
  return { type: ADD_MOVIE, movieName }
}