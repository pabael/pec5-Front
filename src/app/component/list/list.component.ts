import { Component, OnInit } from '@angular/core';
import { DrinkDetail } from '../../models/drink.interface';
import { DrinkService } from '../../services/drink.service';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ListComponent implements OnInit{

  list: DrinkDetail[] = [];
  viewMode: 'cards' | 'table' = 'cards'; 
  loading = true;

  constructor(private drinkService: DrinkService, private router: Router) {}

  ngOnInit(): void {
    this.drinkService.getDrinkList().subscribe(list => {
      this.list = list;
      this.loading = false;
    });
  }

  toggleView(mode: 'cards' | 'table'): void {
    this.viewMode = mode;
  }
}
