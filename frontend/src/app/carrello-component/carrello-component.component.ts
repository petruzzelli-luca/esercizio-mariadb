import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart-service.service';
import { Prodotto } from '../models/prodottomodel';

@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carrello-component.component.html'
})
export class CarrelloComponent {
  private cartService = inject(CartService);

  // Getter per accedere facilmente all'array del servizio
  get items(): Prodotto[] {
    return this.cartService.getItems();
  }

  get totale(): number {
    return this.cartService.getTotale();
  }

  svuota(): void {
    this.cartService.clearCart();
  }
}