import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdottoService } from '../prodotto-service.service';
import { Prodotto } from '../models/prodottomodel';

@Component({
  selector: 'app-lista-prodotti-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-prodotti-component.component.html',
  styleUrl: './lista-prodotti-component.component.css'
})
export class ListaProdottiComponentComponent implements OnInit {
  private prodottoService = inject(ProdottoService);

  prodotti: Prodotto[] = [];
  loading = true; 

  ngOnInit(): void {
    this.prodottoService.getProdotti().subscribe({
      next: (data: Prodotto[]) => {
        this.prodotti = data;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Errore durante il recupero dei dati:', err);
        this.loading = false;
      }
    });
  }
}
