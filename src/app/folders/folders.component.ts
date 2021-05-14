import { Component, OnInit } from '@angular/core';
import { FoldersService } from '../services/folders.service';
import { ProductComponent } from '../product/product.component';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css'],
  providers: [ProductComponent, ProductService],
})
export class FoldersComponent implements OnInit {
  folders: any;
  productls: any;

  constructor(public folderService: FoldersService, private router: Router) { }

  goToDetails(id: number): void {
    this.router.navigate(['/details/' + id]);
  }

  ngOnInit(): void {
    this.productls = localStorage.getItem('productid');
    let deger = JSON.parse(this.productls);

    this.folderService.getFoldersById(deger.pid).subscribe((data) => {
      this.folders = data.data.items;
    });
  }
}
