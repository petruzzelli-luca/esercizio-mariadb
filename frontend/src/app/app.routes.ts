import { Routes } from '@angular/router';
import { ListaProdottiComponentComponent } from './lista-prodotti-component/lista-prodotti-component.component';
import { DettaglioProdottoComponent } from './dettaglio-prodotto-component/dettaglio-prodotto-component.component';
import { CarrelloComponent } from './carrello-component/carrello-component.component';

export const routes: Routes = [
  { path: '', redirectTo: 'prodotti', pathMatch: 'full' },
  { path: 'prodotti', component: ListaProdottiComponentComponent },
  { path: 'prodotto/:id', component: DettaglioProdottoComponent },
  { path: 'carrello', component: CarrelloComponent }
];