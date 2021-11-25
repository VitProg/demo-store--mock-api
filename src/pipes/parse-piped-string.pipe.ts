import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { splitPipedStrings } from '../utils/string';
import { isArray, isNone } from '../utils/type-guards';


export class ParsePipedStringPipe<T extends any = string> implements PipeTransform<string, T[] | undefined> {
  constructor(
    private readonly lowerCase: boolean = false,
    private readonly possibleValues?: T[],
    private readonly required = false
  ) {

  }

  transform(value: string, metadata: ArgumentMetadata) {
    if (isArray(value)) {
      return value as any;
    }
    return isNone(value) ? (this.required ? [] : undefined) : splitPipedStrings(value.toString(), this.lowerCase, this.possibleValues);
  }
}
