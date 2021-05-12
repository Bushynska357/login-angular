
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'format'
})
export class FormatPipe implements PipeTransform {
  transform(value: string, args?: any): string {

    let suffix = 'th';

    if (value === '1' || value === '21' || value === '31') {
        suffix = 'st';
    } else if (value === '2' || value === '22') {
        suffix = 'nd';
    } else if (value === '3' || value === '23') {
       suffix = 'rd';
    }

    return suffix;

  }
}
