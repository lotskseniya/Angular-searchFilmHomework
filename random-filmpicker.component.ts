import { Component } from '@angular/core';
import { FilmService } from '../film-service.service';
import { FilmDataInterface } from 'src/types';

@Component({
  selector: 'app-random-filmpicker',
  templateUrl: './random-filmpicker.component.html',
  styleUrls: ['./random-filmpicker.component.css']
})
export class RandomFilmpickerComponent {
  constructor(public filmService: FilmService) {}

  randomFilm: FilmDataInterface | null = null;

  onRandomButtonClick() {
    this.randomFilm = this.filmService.getRandomFilmToWatch();
  }
}
