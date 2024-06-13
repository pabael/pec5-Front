import { Injectable } from '@angular/core';
import { DrinkDetail } from '../models/drink.interface';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface ApiResponse {
  drinks: DrinkDetail[];
}

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http:HttpClient) { }

  getDrinkList(): Observable<DrinkDetail[]>{
    return this.http.get<ApiResponse>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c`)
    .pipe(
      map(response => {
        return response.drinks;
      })
    )
  }

  getDrinkById(id: string): Observable<DrinkDetail>{
    return this.http.get<ApiResponse>(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .pipe(
      map(response => {
        return response.drinks[0];
      })
    )
  }
}

