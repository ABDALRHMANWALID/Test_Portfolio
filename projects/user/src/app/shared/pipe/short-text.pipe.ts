import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string, num: number): unknown {
    return value.length >= num? `${value.slice(0,num)}...`:value;
  }

}
