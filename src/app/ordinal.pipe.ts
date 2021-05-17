
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ordinal'
})
export class  OrdinalPipe implements PipeTransform {
  transform(value: string): string {

    let suffix = 'th';

    if (value.slice(-1) === '1' && value.slice(-2) !== '11') {
        suffix = 'st';
    }else if (value.slice(-1) === '2' && value.slice(-2) !== '12'){
      suffix = 'nd';
    } else if (value.slice(-1) === '3' && value.slice(-2) !== '13') {
      suffix = 'rd';
    }

    return value + suffix;

  }
}
