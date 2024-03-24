import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  //today - the given date

  transform(date: string, ...args: unknown[]): unknown {
    return moment(date).fromNow();
  }

}
