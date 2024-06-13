import { Component, Input } from '@angular/core';
import { DrinkDetail } from '../../models/drink.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() drink!: DrinkDetail;

  constructor(private router: Router) {}

  navigateToDetail(): void {
    this.router.navigate(['/detail', this.drink.idDrink]);
  }
}
