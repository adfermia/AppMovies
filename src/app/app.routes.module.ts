import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaSearchComponent } from './components/pelicula-search/pelicula-search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

// tslint:disable-next-line: variable-name
const app_routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'buscar', component: PeliculaSearchComponent},
    { path: 'pelicula/:id', component: PeliculaComponent},
    { path: '**', pathMatch: 'full', redirectTo:  'home'}
];

// tslint:disable-next-line: variable-name
export const app_routing = RouterModule.forRoot(app_routes);
