import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionDBService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllStudenti(): Observable<any> {
    return this.http.get(`${this.baseUrl}/studente/all`);
  }

  query1(matricola: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/esame/query1?matricola=${matricola}`);
  }

  query2(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/esame/query2`);
  }

  query3(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/esame/query3?id=${id}`);
  }

  query4(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/esame/query4`);
  }

  query5(matricola: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/esame/query5?matricola=${matricola}`);
  }

  query6(matricola: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/esame/query6?matricola=${matricola}`);
  }


}
