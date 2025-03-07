import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  private apiUrl = 'http://localhost:8080/api/v1/portfolio';


  constructor(private httpClient: HttpClient) {}

  pruebaConexion(): Observable<void> {
    return this.httpClient.get<void>(`${this.apiUrl}`);
  }

}
