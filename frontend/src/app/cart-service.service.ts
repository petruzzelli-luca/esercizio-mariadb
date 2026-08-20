import { Injectable } from '@angular/core';
import { Prodotto } from './models/prodottomodel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Prodotto[] = [];

  // Aggiunge un prodotto all'array in memoria
  addToCart(prodotto: Prodotto): void {
    this.items.push(prodotto);
    console.log('Prodotto aggiunto al carrello:', prodotto);
  }

  // Restituisce la lista dei prodotti nel carrello
  getItems(): Prodotto[] { 
    return this.items;  
  }

  // Calcola il totale ivato
  getTotale(): number {
    return this.items.reduce((acc, p) => acc + p.prezzo_ivato, 0);
  }

  // Svuota il carrello
  clearCart(): void {
    this.items = [];
  }
}