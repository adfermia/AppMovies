import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html',

})
export class PeliculaTarjetaComponent implements OnInit {
  @Input() peliculas: any[] = [];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  verPelicula(i: number) {

    this.router.navigate( ['/pelicula', i] );

  }

  getPeliculaById( id: number) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.peliculas.length; i++) {
      if ( this.peliculas[i].id === id) {
          return this.peliculas[i];
      }
      return undefined;
    }
  }


}
