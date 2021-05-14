import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // request url iceriyor mu sorgusu
    if (!request.url.includes('/connect/token')) {
      const token = localStorage.getItem('token');
      // request kopyalama
      const modified = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
      // clone requesti devam ettir
      return next.handle(modified);
    }
    // requesti devam ettir 
    return next.handle(request);
  }
}
