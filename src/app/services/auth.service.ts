import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }
  // request header.
  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(
      `${this.apiUrl}/connect/token?username=${username}&password=${password}`,
      {}
    );
  }
}
