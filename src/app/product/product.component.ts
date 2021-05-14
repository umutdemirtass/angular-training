import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from './product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  products!: Product[];
  logged!: false;

  constructor(
    private productService: ProductService,
    public router: Router,
  ) { }
  // id localstorage tutma
  goToSubFolders(id: any): void {
    localStorage.setItem('productid', JSON.stringify({ pid: id }));
    this.router.navigate(['/folder/' + id])
  }

  ngOnInit(): void {
    // ana dosyalari cekme
    this.productService.getProducts().subscribe((data) => {
      this.products = data.data[0].folders;
    });
  }
}
