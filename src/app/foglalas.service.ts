import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoglalasService {

  private apiUrl = 'http://localhost:3000/';

  constructor(private http:HttpClient) { }

  getFoglalasok(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/foglalasok`);
  }

  regFoglalas(foglalas: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/foglalasok`, foglalas);
  }
}
