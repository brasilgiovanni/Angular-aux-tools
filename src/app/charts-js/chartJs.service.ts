import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SalesData {
  year: number;
  sales: number;
  color: string;
}

@Injectable({
  providedIn: 'root'
})

export class ChartJsService {
    private dataUrl = 'assets/data/product-A-sales-data.json';
  
    constructor(private http: HttpClient) {}
  
    getSalesData(): Observable<SalesData[]> {
      return this.http.get<SalesData[]>(this.dataUrl);
    }
  }