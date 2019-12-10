import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from 'src/app/model/pelicula-class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'

})
export class PeliculaComponent implements OnInit {
  pelicula: any = {};
  constructor(public peliService: PeliculasService, public route: ActivatedRoute) {
      peliService.getPeliculaById(98).subscribe(data => {

        console.log(data); });
  }

  ngOnInit() {
  }

}

