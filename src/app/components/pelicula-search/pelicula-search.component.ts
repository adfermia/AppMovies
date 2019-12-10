import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula-search',
  templateUrl: './pelicula-search.component.html'

})
export class PeliculaSearchComponent implements OnInit {
  peliculas: any[] = [];
  // tslint:disable-next-line: no-inferrable-types
  termino: string = '';
  constructor( public peliService: PeliculasService) {
   }

  ngOnInit() {
  }
  buscar( termino: string ) {
    this.peliService.getPelicula(termino).subscribe(data => {
      this.peliculas = data;
      console.log(data);
    });
  }

}
