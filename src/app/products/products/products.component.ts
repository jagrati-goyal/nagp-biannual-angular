import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { IProduct } from 'src/app/shared/interfaces/IProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    console.log(this.productService.getAllProducts());
    // this.productService.getAllProducts().subscribe((data) => {
    //   this.products = data;
    //   console.log(this.products);
    // });
    this.products = this.productService.getAllProducts();
    return this.products;
  }

  onView(id: number) {
    this.router.navigate(['product', id]);
  }
}
