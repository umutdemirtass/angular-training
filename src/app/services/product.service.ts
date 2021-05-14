import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  path = 'https://count-book-on-premises-inventory-service-dev.azurewebsites.net/api/v1/Folder/GetFolders/';
  logged = false;
  path3 = 'https://count-book-on-premises-inventory-service-dev.azurewebsites.net/api/v1/Item/GetItem/';
  constructor(private http: HttpClient) { }

  // Ana ekran
  getProducts(): Observable<any> {
    return this.http.get(this.path + '0');
  }
  // Item detaylari
  getItemDetails(id: number): Observable<any> {
    return this.http.get(this.path3 + id);
  }
}
