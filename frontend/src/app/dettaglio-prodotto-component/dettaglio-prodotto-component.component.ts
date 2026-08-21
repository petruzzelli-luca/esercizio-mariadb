import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdottoService } from '../prodotto-service.service';
import { Prodotto } from '../models/prodottomodel';
import { CartService } from '../cart-service.service';
@Component({
  selector: 'app-dettaglio-prodotto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dettaglio-prodotto-component.component.html'
})
export class DettaglioProdottoComponent implements OnInit {
  prodotto?: Prodotto;
  loading: boolean = true;

  private route = inject(ActivatedRoute);
  private prodottoService = inject(ProdottoService);
  private cartService = inject(CartService);

  ngOnInit(): void {
    // Recupero l'ID dall'URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.prodottoService.getProdottoById(id).subscribe({
        next: (data: Prodotto) => {
          this.prodotto = data;
          this.loading = false;
        },
        error: () => this.loading = false
      });
    }
  }

  aggiungiAlCarrello(): void {
    if (this.prodotto) {
      this.cartService.addToCart(this.prodotto);
    }
  }
}