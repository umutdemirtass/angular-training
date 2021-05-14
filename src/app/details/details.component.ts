import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../services/product.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ProductService],

})
export class DetailsComponent implements OnInit {
  id!: number;
  product: any;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.id = +params['id'];
      this.productService.getItemDetails(this.id).subscribe((data) => {
        this.product = data.data;
      });
   });
  }
}

