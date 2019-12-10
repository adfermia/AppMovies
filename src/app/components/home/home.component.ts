import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'

})
export class HomeComponent implements OnInit {
  nuevasPeliculas: any[] = [];
  constructor(public peliService: PeliculasService) {
      this.peliService.getPopulares().subscribe(data => this.nuevasPeliculas = data);

   }

  ngOnInit() {
  }

}
