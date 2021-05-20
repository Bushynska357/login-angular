
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'substitute'
})
export class  TextPipe implements PipeTransform {
  transform(value: string): string {

    let str: string;

    if ( value.length > 20){
        str = value.slice(0, 20);
        return str + '...';
    }
    return value;

  }
}
