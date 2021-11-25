import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { splitPipedNumbers } from '../utils/string';
import { isArray, isNone } from '../utils/type-guards';


@Injectable()
export class ParsePipedIntPipe implements PipeTransform<string, number[]> {
  transform(value: string, metadata: ArgumentMetadata): number[] {
    if (isArray(value)) {
      return value as any;
    }
    return isNone(value) ? [] : splitPipedNumbers(value.toString());
  }
}
