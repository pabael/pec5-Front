import { Component, Input } from '@angular/core';
import { DrinkDetail } from '../../models/drink.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  @Input() drinks!: DrinkDetail[];

  constructor(private router: Router) {}

  navigateToDetail(id: string): void {
    this.router.navigate(['/detail', id]);
  }
}
