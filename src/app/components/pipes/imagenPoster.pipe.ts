import { Pipe, PipeTransform } from '@angular/core';
import {CommonModule} from '@angular/common';

@Pipe({
  name: 'imagenPoster'
})
export class ImagenPosterPipe implements PipeTransform {
  // tslint:disable-next-line: variable-name
  transform( pelicula: any, ): string {
    // tslint:disable-next-line: prefer-const
    let urlimagen = 'http://image.tmdb.org/t/p/w500';
    if ( pelicula.poster_path) {
      return urlimagen + pelicula.poster_path;
    } else {
      return 'assets/img/noimage.jpg';
    }
  }

}
