import { ApiProperty, OmitType } from "@nestjs/swagger";
import { PaginationDto } from "./pagination.dto";
import { ProductListDTO } from "./product-list.dto";


export class ProductCountDTO extends OmitType(ProductListDTO, ['sort', 'sortDir', 'page',]) {
}
