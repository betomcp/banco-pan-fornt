import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient, HttpClientModule, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public post(user: string): Observable<string>{
    return this.http.post<string>("url", user).pipe(
      res => res,
      error => error
    )
  }
}
