import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProdottiComponentComponent } from './lista-prodotti-component/lista-prodotti-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaProdottiComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
