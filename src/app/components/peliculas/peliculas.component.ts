import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html'

})
export class PeliculasComponent implements OnInit {
  @Input() peliculas: any[] = [];
  peliculasKids: any[] = [];

  constructor(public peliService: PeliculasService) {
    this.peliService.getPeliculasKids().subscribe(data => this.peliculasKids = data);
   }

  ngOnInit() {
  }

}
