import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://gorest.co.in/public/v2/users';

  constructor(private http: HttpClient) {}

  getUsers(query?: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?name=${encodeURIComponent(query || '')}`);
  }
}