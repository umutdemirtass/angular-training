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
    // Url check
    if (!request.url.includes('/connect/token')) {
      const token = localStorage.getItem('token');
      // request cloning part
      const modified = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
      // clone request contiune
      return next.handle(modified);
    }
    // main request contiune  
    return next.handle(request);
  }
}
