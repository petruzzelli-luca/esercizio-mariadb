import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prodotto } from './models/prodottomodel';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  private http = inject(HttpClient);
  private apiUrl = 'https://upgraded-space-yodel-q7pjjg4jwqrp34q5x-5000.app.github.dev/';

  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.apiUrl + 'api/prodotti');
  }
}