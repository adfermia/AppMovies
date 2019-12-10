import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  // tslint:disable-next-line: no-inferrable-types
  private apikey: string = '939462753d6fcee36af5a1b544ef8c34';
  // tslint:disable-next-line: no-inferrable-types
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
  private peliculas: any[] = [];
  constructor(private http: HttpClient) { }

  getPopulares() {

    // tslint:disable-next-line: prefer-const
    // tslint:disable-next-line: max-line-length prefer-const
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey}&language=es&callback=JSONP_CALLBACK`; // &callback=JSONP_CALLBACK

    return this.http.jsonp( url, '').pipe( map((res: any) => res.results
    ));
  }

  getPelicula(pelicula: string) {
    // tslint:disable-next-line: max-line-length prefer-const
    let url = `${this.urlMoviedb}/search/movie?query=${pelicula}&api_key=${ this.apikey}&language=es&callback=JSONP_CALLBACK`; // &callback=JSONP_CALLBACK

    return this.http.jsonp( url, '').pipe( map((res: any) => res.results
    ));
  }
  getPeliculasKids() {
// tslint:disable-next-line: max-line-length prefer-const
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey}&language=es&callback=JSONP_CALLBACK`; // &callback=JSONP_CALLBACK

    return this.http.jsonp( url, '').pipe( map((res: any) => res.results
    ));
  }
  getPeliculaById(id: number) {

    // tslint:disable-next-line: max-line-length prefer-const
    let url = `${this.urlMoviedb}/movie/${id}?&api_key=${this.apikey}&callback=JSONP_CALLBACK`;
   // https://api.themoviedb.org/3/movie/98?&api_key=939462753d6fcee36af5a1b544ef8c34&callback=JSONP_CALLBACK
    console.log(url);
    let pelicula: any = {};
    // tslint:disable-next-line: arrow-return-shorthand
    return this.http.jsonp( url, '').pipe( map((res: any) => {
      pelicula = res.json().results;
      console.log(pelicula);
      return res.json().results;
    }));


  }
}

