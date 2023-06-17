import { Injectable } from '@angular/core';
import { FilmDataInterface } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films: FilmDataInterface[] = [];

  private API_KEY = 'acdc8879e8msh60a6825abc74ff9p189ecajsn83ebfa7e841e'; 
  private url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=';
  private options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': this.API_KEY,
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };
  constructor() { }

  async searchFilms(filmName: string) {
    const json = await fetch(`${this.url}${filmName}`, this.options);
    const responseData = await json.json();
  
    if (responseData.d) {
      this.films = responseData.d;
    }
    console.log(responseData)
  }

  getLikedFilms(): FilmDataInterface[] {
   const likedFilms = JSON.parse(localStorage.getItem("likedFilms") || "[]");
   return likedFilms;
  }

  addLikedFilm(film: FilmDataInterface){
   const prevLikedFilms = this.getLikedFilms(); 
   localStorage.setItem("likedFilms", JSON.stringify([...prevLikedFilms, film]));
   return this.getLikedFilms();
  }

  removeLikedFilm(film: FilmDataInterface){
    const prevLikedFilms = this.getLikedFilms();
    const newLikedFilms = prevLikedFilms.filter(({id}) => id !== film.id);
    localStorage.setItem("likedFilms", JSON.stringify(newLikedFilms));
  }

  checkIfFilmIsLiked(film: FilmDataInterface): boolean {
    const likedFilms = this.getLikedFilms();
    return Boolean(likedFilms.find(({id}) => film.id === id));
  }

  getRandomFilmToWatch() {
    const likedFilms = this.getLikedFilms();
    
    return likedFilms[Math.floor(Math.random() * likedFilms.length)];
  }
}
