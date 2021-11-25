import { Injectable } from '@nestjs/common';
import * as products from './mock/products.json';
import * as users from './mock/users.json';
import * as categories from './mock/categories.json';
import { ProductListDTO } from "../dto/product-list.dto";
import { ProductListResponse } from "../responses/product-list.response";
import { UserModel } from "../models/user.model";
import { CategoryModel } from "../models/category.model";
import { UserFullModel } from "../models/user.full-model";
import { CategoryFullModel } from "../models/category.full-model";
import { ProductModel } from "../models/product.model";
import { omit } from "../utils/object";
import { compareNumbers } from "../utils/number";
import { compareStrings } from "../utils/string";
import { PaginationDto } from "../dto/pagination.dto";
import { UserListResponse } from "../responses/user-list.response";


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

    const page = 'page' in props ? props.page : 1;
    const pageSize = 'pageSize' in props ? props.pageSize : Infinity;

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
      });
    }

    const total = result.length;

    if (pageSize < Infinity) {
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      result = result.slice(start, end);
    }

    return {
      page,
      pageSize,
      count: result.length,
      total,
      data: result,
    };
  }

  async product(id: number): Promise<ProductModel | undefined> {
    const products = await this.products({});
    return products.data.find(product => product.id === id);
  }

  async users(props: PaginationDto): Promise<UserListResponse> {
    const _users = users as any as UserFullModel[];
    let result = _users.map(user => omit(user, 'password'));

    const page = 'page' in props ? props.page : 1;
    const pageSize = 'pageSize' in props ? props.pageSize : Infinity;

    const total = result.length;

    if (pageSize < Infinity) {
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      result = result.slice(start, end);
    }

    return {
      page,
      pageSize,
      count: result.length,
      total,
      data: result,
    };
  }

  async user(id: number): Promise<UserModel | undefined> {
    const _users = users as any as UserFullModel[];
    return _users.find(user => user.id === id);
  }

  async categories(): Promise<Array<CategoryModel>> {
    const _categories = categories as any as CategoryFullModel[];
    return _categories
      .sort((a, b) => b.sort - a.sort)
      .map(category => omit(category, 'sort'));
  }

}
