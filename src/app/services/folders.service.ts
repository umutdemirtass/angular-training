import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {
  path2 = 'https://count-book-on-premises-inventory-service-dev.azurewebsites.net/api/v1/Folder/GetFoldersWithItems/';

  constructor(private http: HttpClient) { }
  // Orta Klasorler
  getFoldersById(id: any): Observable<any> {
    return this.http.get(this.path2 + id + '?page=0&limit=10');
  }
}
