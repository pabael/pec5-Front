import { DrinkService } from './../../services/drink.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinkDetail } from '../../models/drink.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{

  drink: DrinkDetail;

  constructor(
    private drinkService: DrinkService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) 

    {
      this.drink = {} as DrinkDetail;
    }

  ngOnInit(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
      if(id) {
        this.drinkService.getDrinkById(id).subscribe((drink: DrinkDetail) => {
          this.drink = drink;
        }) 
      }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
