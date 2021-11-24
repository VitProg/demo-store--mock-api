import { Injectable } from '@nestjs/common';
import * as products from './mock/products.json';
import * as users from './mock/users.json';
import * as categories from './mock/categories.json';
import { ProductListDTO } from "../dto/product-list.dto";
import { ProductListResponse } from "../responses/product-list.response";
import { UserModel } from "../models/user.model";
import { compareNumbers, compareStrings, removeProperty } from "../utils";
import { CategoryModel } from "../models/category.model";
import { UserFullModel } from "../models/user.full-model";
import { CategoryFullModel } from "../models/category.full-model";
import { ProductModel } from "../models/product.model";


@Injectable()
export class DataService {

  async products(props: ProductListDTO): Promise<ProductListResponse> {
    //

    const {
      category,
      priceMin,
      priceMax,
      title,
      rating,
      sort = 'id',
      sortDir = 'asc',
    } = props;

    let result: ProductModel[] = [...products];

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

    if (sort) {
      result = result.sort((a, b) => {
        switch (sort) {
          case "id":
            return compareNumbers(a.id, b.id, sortDir);
          case "price":
            return compareNumbers(a.price, b.price, sortDir);
          case "rating":
            return compareNumbers(a.rating.rate, b.rating.rate, sortDir);
          case "title":
            return compareStrings(a.title, b.title, sortDir);
        }
      })
    }

    return {
      page: 0,
      count: result.length,
      data: result,
    };

  }

  async product(id: number): Promise<ProductModel | undefined> {
    const products = await this.products({});
    return products.data.find(product => product.id === id);
  }

  async users(): Promise<Array<UserModel>> {
    const _users = users as any as UserFullModel[];
    return _users.map(user => removeProperty(user, 'password'))
  }

  async user(id: number): Promise<UserModel | undefined> {
    const users = await this.users();
    return users.find(user => user.id === id);
  }

  async categories(): Promise<Array<CategoryModel>> {
    const _categories = categories as any as CategoryFullModel[];
    return _categories
      .sort((a, b) => b.sort - a.sort)
      .map(category => removeProperty(category, 'sort'))
  }

}
