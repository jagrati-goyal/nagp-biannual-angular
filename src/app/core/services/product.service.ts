import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/IProduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiURL: string = 'api/productDetail';

  products: IProduct[] = [
    {
      id: 1,
      name: 'A',
      price: 100,
      description: 'This is A',
      tags: 'This is A tag',
      category: 'Phone',
      quantity: 3,
      returnable: true,
      image:
        'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-A12-3-GFUTU629745E657DA2D/1591384302184_0..png',
    },
    {
      id: 2,
      name: 'B',
      price: 200,
      description: 'This is B',
      tags: 'This is B tag',
      category: 'Phone',
      quantity: 2,
      returnable: true,
      image:
        'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-A12-3-GFUTU629745E657DA2D/1591384302184_0..png',
    },
    {
      id: 3,
      name: 'C',
      price: 1000,
      description: 'This is A',
      tags: 'This is A tag',
      category: 'Top',
      quantity: 3,
      returnable: true,
      image:
        'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-A12-3-GFUTU629745E657DA2D/1591384302184_0..png',
    },
    {
      id: 4,
      name: 'CD',
      price: 100,
      description: 'This is D',
      tags: 'This is D tag',
      category: 'Accessory',
      quantity: 3,
      returnable: false,
      image:
        'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-A12-3-GFUTU629745E657DA2D/1591384302184_0..png',
    },
  ];
  constructor(private http: HttpClient) {}

  // getAllProducts(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(this.apiURL);
  // }

  getAllProducts() {
    return this.products;
  }

  getProductDetail(id: number) {
    var index = this.products.findIndex((product) => product.id == id);
    if (index != -1) {
      return this.products[index];
    }
  }
}
