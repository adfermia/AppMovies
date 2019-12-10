import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';
import { Pelicula } from './model/pelicula-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeliculasApp';

  constructor(public peliService: PeliculasService) {

  }
}
