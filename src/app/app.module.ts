import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
// Rutas
import { app_routing } from './app.routes.module';
// componentes
import { AppComponent } from './app.component';
import { PeliculasService } from './services/peliculas.service';
import { HomeComponent } from './components/home/home.component';
import { PeliculaSearchComponent } from './components/pelicula-search/pelicula-search.component';
import { SharedComponent } from './components/shared/shared.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ImagenPipe } from './components/pipes/imagen.pipe';
import { PeliculaTarjetaComponent } from './components/pelicula-tarjeta/pelicula-tarjeta.component';
import { ImagenPosterPipe } from './components/pipes/imagenPoster.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaSearchComponent,
    SharedComponent,
    PeliculasComponent,
    PeliculaComponent,
    PeliculaTarjetaComponent,
    ImagenPipe,
    ImagenPosterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    app_routing



  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
