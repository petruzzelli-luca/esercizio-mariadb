import { Routes } from '@angular/router';
import { ListaProdottiComponentComponent } from './lista-prodotti-component/lista-prodotti-component.component';
import { DettaglioProdottoComponentComponent } from './dettaglio-prodotto-component/dettaglio-prodotto-component.component';
import { CarrelloComponentComponent } from './carrello-component/carrello-component.component';

export const routes: Routes = [
  { path: '', redirectTo: 'prodotti', pathMatch: 'full' }, 
  { path: 'prodotti', component: ListaProdottiComponentComponent },
  { path: 'prodotto/:id', component: DettaglioProdottoComponentComponent },
  { path: 'carrello', component: CarrelloComponentComponent }
];