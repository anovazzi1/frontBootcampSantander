import { StockCardComponent } from './stock-card/stock-card.component';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  readonly baseurl = 'https://bootcampsantader.herokuapp.com/bootcamp/'

  async getStocks(): Promise<Stock[]>{

    return this.http.get<Stock[]>(`${this.baseurl}/stock`).toPromise();
  }
}
