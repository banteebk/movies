import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public _baseUrl: string = "http://api.themoviedb.org/3/";
  public API_KEY = "84e9e69f2c919040639cb0d2a7975459";

  constructor(private http: HttpClient) { }

  getMovies(pageNo : number) {
    return this.http.get(`${this._baseUrl}movie/popular?api_key=${this.API_KEY}&language=en-Us&page=${pageNo}`)
  }

  getMovieDetails(movie_id:number){
    return this.http.get(`${this._baseUrl}movie/${movie_id}?api_key=${this.API_KEY}&language=en-US`);
  }

  searchMovie(pageNo : number,query:any ){
    return this.http.get(`${this._baseUrl}search/movie?api_key=${this.API_KEY}&language=en-Us&page=${pageNo}&query=${query}`)
  }

}
