import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/IProduct';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class ProductInMemoryService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const products: IProduct[] = [
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

    return products;
  }

  genId(products: IProduct[]): number {
    return products.length > 0
      ? Math.max(...products.map((product) => product.id)) + 1
      : 11;
  }
}
