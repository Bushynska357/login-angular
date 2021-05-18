import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'relative'
})
export class  RelativePipe implements PipeTransform {
  transform(value: string): any{

      const now = +new Date();
      const sub = now - Number(value);


      if (sub < 60 * 60 * 1000){
         return moment(value).startOf('minute').fromNow();
     }else{
        return moment(value).format('h:mm a');
     }


  }
}
