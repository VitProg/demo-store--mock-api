import { Injectable } from '@nestjs/common';
import * as products from './mock/products.json';
import { ProductListDTO } from "../dto/product-list.dto";


@Injectable()
export class DataService {

  async products(props: ProductListDTO) {
    //

    const { category, priceMin, priceMax, title, rating } = props;

    let result: any[] = [...products];

    if (category) {
      result = result.filter(item => item.category == category);
    }

    if (priceMin || priceMax) {
      result = result.filter(item =>
        (priceMin ? item.price >= priceMin : true) &&
        (priceMax ? item.price <= priceMax : true)
      );
    }

    if (rating) {
      result = result.filter(item => {
        return item.rating.rate >= rating;
      });
    }

    if (title && title.trim().length > 1) {
      result = result.filter(item => item.title.toLocaleLowerCase().includes(title.toLocaleLowerCase().trim()));
    }

    // todo page

    return {
      page: 0,
      count: result.length,
      data: result,
    };

  }

}
