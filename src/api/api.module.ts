import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { MyModule } from './my/my.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [CategoryModule, ProductModule, UserModule, MyModule, CartModule, ApiModule],
})
export class ApiModule {}
